import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "../component/Box";
import BoxInput from "../component/BoxInput";
import BoxInputCombo from "../component/BoxInputCombo";
import ButtonPrimary from "../component/ButtonPrimary";
import ButtonBack from "../component/ButtonBack";
import ButtonDanger from "../component/ButtonDanger";
import Layout from "../component/Layout";
import PageTitle from "../component/PageTitle";

export default function Setting() {
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [datalist, setDatalist] = useState([]);
    const { id } = useParams();
    const [name, setName] = useState("");
    const [ref1Id, setRef1Id] = useState(0);

    const handleRemove = () => {
        if (window.confirm("确定要删除当前数据吗？")) {
            fetch(`/api/simple/setting/${id}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.status < 400) window.history.back();
                    else throw new Error("操作失败");
                })
                .catch((err) => window.alert(err));
        }
    };
    const handleSubmit = () => {
        let _refId = 0;
        if (category) {
            _refId = datalist[datalist.map((v) => v.name).indexOf(category)].id;
        }
        if (parseInt(id, 10) > 0) {
            fetch(`/api/simple/setting/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    refId: _refId > 0 ? _refId : 0,
                    ref1Id,
                    tag: JSON.stringify(Array.of(category)),
                    detail: JSON.stringify({ name, content }),
                }),
            })
                .then((response) => {
                    if (response.status < 400) window.history.back();
                    else throw new Error("操作失败");
                })
                .catch((err) => window.alert(err));
        } else {
            fetch("/api/simple/setting", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    refId: _refId > 0 ? _refId : 0,
                    ref1Id,
                    tag: JSON.stringify(Array.of(category)),
                    detail: JSON.stringify({ name, content }),
                }),
            })
                .then((response) => {
                    if (response.status < 400) window.history.back();
                    else throw new Error("操作失败");
                })
                .catch((err) => window.alert(err));
        }
    };

    useEffect(() => {
        fetch("/api/simple/setting?option=filterBy-refId&refId=0")
            .then((response) => {
                if (response.status < 400) return response.json();
                else throw new Error("请求数据失败");
            })
            .then((data) => {
                const l = data.map((v) => ({
                    id: v.id,
                    name: JSON.parse(v.detail).name,
                }));
                setDatalist(l);
            })
            .catch((err) => window.console.err(err));
    }, []);

    useEffect(() => {
        if (id > 0) {
            fetch(`/api/simple/setting/${id}`)
                .then((response) => {
                    if (response.status < 400) return response.json();
                    else throw new Error("请求数据失败");
                })
                .then((data) => {
                    setRef1Id(data.ref1Id);
                    setName(JSON.parse(data.detail).name);
                    setContent(JSON.parse(data.detail).content);
                    setCategory(JSON.parse(data.tag)[0] || "");
                })
                .catch((err) => window.console.error(err));
        }
    }, [id]);

    return (
        <Layout option="系统设置">
            <PageTitle text="系统设置" />
            <div className="my-4">
                <div className="flex justify-between">
                    <ButtonBack />
                </div>
            </div>
            <Box>
                <div className="grid grid-cols-1 divide-y gap-3 divide-slate-300">
                    <div className="pt-3">
                        <div className="grid grid-col-1 gap-3">
                            <BoxInputCombo
                                text="类别"
                                value={category}
                                datalistId="settingName"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <datalist id="settingName">
                                {datalist.map((v) => (
                                    <option key={v.id} value={v.name} />
                                ))}
                            </datalist>
                            <BoxInput
                                text="名称"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <BoxInput
                                text="内容"
                                type="text"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="pt-3">
                        <div className="flex flex-row justify-between">
                            {parseInt(id, 10) > 0 && category !== "" ? (
                                <ButtonDanger onClick={handleRemove} />
                            ) : (
                                <span></span>
                            )}
                            <ButtonPrimary onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </Box>
        </Layout>
    );
}

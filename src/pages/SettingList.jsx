import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";
import ButtonSecondary from "../components/ButtonSecondary";
import Box from "../components/Box";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Table, { Td } from "../components/Table";

export default function SettingList() {
    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [settingList, setSettingList] = useState([]);

    const handleFetchSetting = () => {
        fetch("/api/simple/setting")
            .then((response) => {
                if (response.status < 400) return response.json();
                else throw new Error("请求数据失败");
            })
            .then((data) => {
                setSettingList(data);
            })
            .catch((err) => window.console.error(err));
    };

    useEffect(() => {
        fetch("/api/simple/setting?option=filterBy-refId&refId=0")
            .then((response) => {
                if (response.status < 400) return response.json();
                else throw new Error("请求数据失败");
            })
            .then((data) => {
                setCategoryList(data.map((v) => ({ id: v.id, name: JSON.parse(v.detail).name })));
            })
            .catch((err) => window.console.error(err));
    }, []);

    useEffect(() => {
        if (category) {
            const _refId = categoryList[categoryList.map((v) => v.name).indexOf(category)].id;
            fetch(`/api/simple/setting?option=filterBy-refId&refId=${_refId}`)
                .then((response) => {
                    if (response.status < 400) return response.json();
                    else throw new Error("请求数据失败");
                })
                .then((data) => {
                    setSettingList(data);
                })
                .catch((err) => window.console.error(err));
        } else {
            handleFetchSetting();
        }
    }, [category, categoryList]);

    return (
        <Layout option="系统设置">
            <PageTitle text="系统设置" />
            <div className="my-4">
                <div className="flex justify-between">
                    <ButtonBack />
                    <ButtonSecondary
                        text="新增"
                        onClick={() => (window.location.href = "/setting/0")}
                    />
                </div>
            </div>
            <Box>
                <div className="grid grid-cols-1 divide-y gap-3 divide-slate-300">
                    <select
                        value={category}
                        className="w-24 border-slate-400 border rounded px-2 py-1"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">未选择</option>
                        {categoryList.map((v) => (
                            <option key={v.id} value={v.name}>
                                {v.name}
                            </option>
                        ))}
                    </select>
                    <div className="pt-3">
                        <Table thead={["序号", "分类", "名称", "内容", "操作"]}>
                            {settingList.map((v, i) => (
                                <tr key={v.id}>
                                    <Td>{i + 1}</Td>
                                    <Td>{JSON.parse(v.tag).join(",")}</Td>
                                    <Td>{JSON.parse(v.detail).name}</Td>
                                    <Td>{JSON.parse(v.detail).content}</Td>
                                    <Td>
                                        <Link to={`/setting/${v.id}`} className="text-blue-500">
                                            <FontAwesomeIcon icon={faEdit} fixedWidth />
                                        </Link>
                                    </Td>
                                </tr>
                            ))}
                        </Table>
                    </div>
                </div>
            </Box>
        </Layout>
    );
}

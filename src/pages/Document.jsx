import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "../components/Box";
import BoxInput from "../components/BoxInput";
import BoxSelect from "../components/BoxSelect";
import ButtonBack from "../components/ButtonBack";
import ButtonDanger from "../components/ButtonDanger";
import ButtonFlow from "../components/ButtonFlow";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default function Document() {
    const { id } = useParams();

    const [category, setCategory] = useState("普查");
    const [dept, setDept] = useState("");
    const [manager, setManager] = useState("");
    const [managerPhone, setManagerPhone] = useState("");
    const [operator, setOperator] = useState("");
    const [operatorPhone, setOperatorPhone] = useState("");
    const [pageTitle, setPageTitle] = useState("");
    const [reqPxdc, setReqPxdc] = useState("无要求");
    const [reqPjcw, setReqPjcw] = useState("无要求");
    const [reqPzydd, setReqPzydd] = useState("无要求");
    const [reqPqt, setReqPqt] = useState("无");
    const [timeBegin, setTimeBegin] = useState(dayjs().add(1, "hour").format("YYYY-MM-DDTHH:00"));
    const [timeEnd, setTimeEnd] = useState(dayjs().add(3, "hour").format("YYYY-MM-DDTHH:00"));
    const [title, setTitle] = useState("");
    const [train, setTrain] = useState("");

    const handleRemove = () => {
        if (window.confirm("确定要删除当前的数据吗？")) {
            fetch(`/api/simple/biz/document/${id}`, {
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
        if (parseInt(id, 10) > 0) {
            fetch(`/api/simple/biz/document/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    train,
                    timeBegin: dayjs(timeBegin).format("YYYY-MM-DD HH:mm"),
                    timeEnd: dayjs(timeEnd).format("YYYY-MM-DD HH:mm"),
                    title,
                    tag: JSON.stringify(["计划外作业", "提交"]),
                    detail: JSON.stringify({
                        dept,
                        manager,
                        managerPhone,
                        operator,
                        operatorPhone,
                        category,
                        reqPxdc,
                        reqPjcw,
                        reqPzydd,
                        reqPqt,
                    }),
                }),
            })
                .then((response) => {
                    if (response.status < 400) window.history.back();
                    else throw new Error("操作失败");
                })
                .catch((err) => window.alert(err));
        } else {
            fetch("/api/simple/biz/document", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    train,
                    timeBegin: dayjs(timeBegin).format("YYYY-MM-DD HH:mm"),
                    timeEnd: dayjs(timeEnd).format("YYYY-MM-DD HH:mm"),
                    title,
                    tag: JSON.stringify(["计划外作业", "提交"]),
                    detail: JSON.stringify({
                        dept,
                        manager,
                        managerPhone,
                        operator,
                        operatorPhone,
                        category,
                        reqPxdc,
                        reqPjcw,
                        reqPzydd,
                        reqPqt,
                    }),
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
        if (parseInt(id, 10) > 0) {
            setPageTitle("一体化作业");
        } else setPageTitle("新增作业");
    }, [id]);

    useEffect(() => {
        if (parseInt(id, 10) > 0) {
            fetch(`/api/simple/biz/document/${id}`)
                .then((response) => {
                    if (response.status < 400) return response.json();
                    else throw new Error("请求数据失败");
                })
                .then((data) => {
                    const {
                        dept,
                        manager,
                        managerPhone,
                        operator,
                        operatorPhone,
                        category,
                        reqPxdc,
                        reqPjcw,
                        reqPzydd,
                        reqPqt,
                    } = JSON.parse(data.detail);
                    setDept(dept);
                    setManager(manager);
                    setManagerPhone(managerPhone);
                    setOperator(operator);
                    setOperatorPhone(operatorPhone);
                    setTrain(data.train);
                    setTimeBegin(dayjs(data.timeBegin).format("YYYY-MM-DDTHH:mm"));
                    setTimeEnd(dayjs(data.timeEnd).format("YYYY-MM-DDTHH:mm"));
                    setCategory(category);
                    setTitle(data.title);
                    setReqPxdc(reqPxdc);
                    setReqPjcw(reqPjcw);
                    setReqPzydd(reqPzydd);
                    setReqPqt(reqPqt);
                })
                .catch((err) => window.console.error(err));
        }
    }, [id]);

    return (
        <Layout option={"新增作业"}>
            <PageTitle text={pageTitle} />
            <div className="my-4">
                <ButtonBack />
            </div>
            <Box>
                <div className="grid gap-4">
                    <BoxInput
                        text="申请单位"
                        value={dept}
                        onChange={(e) => setDept(e.target.value)}
                    />
                    <div className="flex flex-row gap-12">
                        <BoxInput
                            text="申请人"
                            value={manager}
                            onChange={(e) => setManager(e.target.value)}
                        />
                        <BoxInput
                            text="申请人电话"
                            value={managerPhone}
                            onChange={(e) => setManagerPhone(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row gap-12">
                        <BoxInput
                            text="作业负责人"
                            value={operator}
                            onChange={(e) => setOperator(e.target.value)}
                        />
                        <BoxInput
                            text="作业负责人电话"
                            value={operatorPhone}
                            onChange={(e) => setOperatorPhone(e.target.value)}
                        />
                    </div>
                    <BoxInput
                        text="作业车组"
                        value={train}
                        onChange={(e) => setTrain(e.target.value)}
                    />
                    <div className="flex flex-row gap-12">
                        <BoxInput
                            type="datetime-local"
                            text="申请作业时间 - 起"
                            value={timeBegin}
                            onChange={(e) => setTimeBegin(e.target.value)}
                        />
                        <BoxInput
                            type="datetime-local"
                            text="申请作业时间 - 止"
                            value={timeEnd}
                            onChange={(e) => setTimeEnd(e.target.value)}
                        />
                    </div>
                    <BoxSelect
                        text="作业内容"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        option={["普查", "检查", "故障处理", "加装改造", "其它"]}
                    />
                    <BoxInput
                        text="作业内容"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <BoxSelect
                        text="施修要求 - 蓄电池"
                        value={reqPxdc}
                        onChange={(e) => setReqPxdc(e.target.value)}
                        option={["供", "断", "无要求"]}
                    />
                    <BoxSelect
                        text="施修要求 - 接触网"
                        value={reqPjcw}
                        onChange={(e) => setReqPjcw(e.target.value)}
                        option={["供", "断", "无要求"]}
                    />
                    <BoxSelect
                        text="施修要求 - 作业地点"
                        value={reqPzydd}
                        onChange={(e) => setReqPzydd(e.target.value)}
                        option={["检查库", "临修库", "无要求"]}
                    />
                    <BoxInput
                        text="施修要求 - 其它"
                        value={reqPqt}
                        onChange={(e) => setReqPqt(e.target.value)}
                    />
                </div>
                <div className="mt-8 flex justify-between">
                    {parseInt(id, 10) > 0 ? (
                        <ButtonDanger text="删除" onClick={handleRemove} />
                    ) : (
                        <span></span>
                    )}
                    <ButtonFlow handleSave={handleSubmit} id={id} title={title} />
                </div>
            </Box>
        </Layout>
    );
}

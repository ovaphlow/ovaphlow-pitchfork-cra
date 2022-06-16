import React, { useEffect, useReducer } from "react";
import ButtonBack from "../components/ButtonBack";
import Box from "../components/Box";
import ButtonPrimary from "../components/ButtonPrimary";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { reducer } from "../utilities/reducer";

export default function Review() {
    const [state, dispatch] = useReducer(reducer, {});

    const updateState = (e) => dispatch({ type: "set", key: e.target.name, value: e.target.value });

    const handleSubmit = () => {
        // 判断子单1-4是不是填写完整
        fetch("", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                timeBegin: state["timeBegin"],
                timeEnd: state["timeEnd"],
                remark: state["remark"],
            }),
        })
            .then((response) => {
                if (response.status < 400) window.history.back();
                else throw new Error("操作失败");
            })
            .catch((err) => window.alert(err));
    };

    useEffect(() => {
        // 页面渲染时，获取对应的一体化作业数据
        fetch("")
            .then((response) => response.status < 400 && response.json())
            .then((data) => {
                dispatch({ type: "set", key: "remark", value: data?.remark });
                dispatch({ type: "set", key: "timeBegin", value: data?.timeBegin });
                dispatch({ type: "set", key: "remark", value: data?.timeBegin });
            });
    }, []);

    return (
        <Layout option={"作业负责人销记"}>
            <PageTitle text="作业负责人销记" />
            <div className="my-4">
                <ButtonBack />
            </div>
            <Box>
                <div className="flex flex-row gap-4 justify-evenly">
                    <ButtonPrimary text={"子单 1"} />
                    <ButtonPrimary text={"子单 2"} />
                    <ButtonPrimary text={"子单 3"} />
                    <ButtonPrimary text={"子单 4"} />
                </div>
                <div className="flex flex-row gap-4 mt-4">
                    <div className="flex-1 grid gap-2">
                        <label>作业开始时间</label>
                        <input
                            type="datetime-local"
                            name="timeBegin"
                            value={state["timeBegin"]}
                            className="flex-1 border border-neutral-400 rounded px-2 py-1"
                            onChange={updateState}
                        />
                    </div>
                    <div className="flex-1 grid gap-2">
                        <label>作业结束时间</label>
                        <input
                            type="datetime-local"
                            name="timeEnd"
                            value={state["timeEnd"]}
                            className="flex-1 border border-neutral-400 px-2 py-1 rounded"
                            onChange={updateState}
                        />
                    </div>
                </div>
                <div className="mt-4 grid gap-2">
                    <label>备注</label>
                    <input
                        type="text"
                        name="remark"
                        value={state["remark"]}
                        className="flex-1 border border-neutral-400 px-2 py-1 rounded"
                        onChange={updateState}
                    />
                </div>
                <div className="mt-4 flex flex-row justify-end">
                    <ButtonPrimary text={"提交"} onClick={handleSubmit} />
                </div>
            </Box>
        </Layout>
    );
}

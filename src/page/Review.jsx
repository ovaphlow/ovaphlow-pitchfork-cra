import React from "react";
import { ButtonBack } from "../component/Button";
import { Box } from "../component/Container";
import Layout from "../component/Layout";
import { PageTitle } from "../component/Title";

export default function Review() {
    const handleSubmit = () => {
        // 判断子单1-4是不是填写完整
    }

    return (
        <Layout option={"作业负责人销记"}>
            <PageTitle text="作业负责人销记" />
            <div className="my-4">
                <ButtonBack />
            </div>
            <Box>
                <div className="flex flex-row gap-4 justify-evenly">
                    <button type="button" className="bg-indigo-500 text-white px-4 py-2 shadow rounded">子       单1</button>
                    <button type="button" className="bg-indigo-500 text-white px-4 py-2 shadow rounded">子       单2</button>
                    <button type="button" className="bg-indigo-500 text-white px-4 py-2 shadow rounded">子       单3</button>
                    <button type="button" className="bg-indigo-500 text-white px-4 py-2 shadow rounded">子       单4</button>
                </div>
                <div className="flex flex-row gap-4 mt-4">
                    <div className="flex-1 grid gap-2">
                        <label>作业开始时间</label>
                        <input type="datetime-local" className="flex-1 border-2 border-slate-500 px-2 py-1" />
                    </div>
                    <div className="flex-1 grid gap-2">
                        <label>作业结束时间</label>
                        <input type="datetime-local" className="flex-1 border-2 border-slate-500 px-2 py-1" />
                    </div>
                </div>
                <div className="mt-4 grid gap-2">
                    <label>备注</label>
                    <input type="text" className="border-2 border-slate-500 px-2 py-1" />
                </div>
                <div className="mt-4 flex flex-row justify-end">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 shadow rounded" onClick={handleSubmit}>
                        提交
                    </button>
                </div>
            </Box>
        </Layout>
    )
}

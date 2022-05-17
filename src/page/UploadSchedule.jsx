import { useEffect, useState } from "react";
import { ButtonBack } from "../component/Button";
import Layout from "../component/Layout";
import { PageTitle } from "../component/Title";

export default function UploadSchedule() {
    const [documentList, setDocumentList] = useState([]);

    const click = async () => {
        const r = await handle(); // 同步获取运行结果
        const t = await handle1();
        console.log(r, t);
    };
    // promise 是一个对象，这里用promise封装了fetch通信
    const handle = () =>
        new Promise((resolve, reject) => {
            fetch("/api/simple/biz/document", {
                method: "GET", // 默认 GET
            })
                .then((response) => {
                    if (response.status < 400) return response.json();
                    else reject("请求数据异常");
                })
                .then((data) => {
                    resolve(data);
                });
        });
    const handle1 = () =>
        new Promise((resolve, reject) => {
            fetch("/api/simple/biz/document", {
                method: "GET", // 默认 GET
            })
                .then((response) => {
                    if (response.status < 400) return response.json();
                    else reject("请求数据异常");
                })
                .then((data) => {
                    resolve(data);
                });
        });

    useEffect(() => {
        // url 地址 / 接口
        // 异步的请求 / 函数
        /*
        fetch("/api/simple/biz/document", {
            method: "GET", // 默认 GET
        })
            .then((response) => {
                if (response.status < 400) return response.json();
                else throw new Error("请求数据失败"); // 抛出异常
            })
            .then((data) => {
                // console.log(data);
                setDocumentList(data);
            })
            .catch((err) => window.alert(err));
            */
    }, []);

    return (
        <Layout option={"上传作业计划"}>
            <PageTitle text={"上传作业计划"} />
            <div className="my-4">
                <ButtonBack />
            </div>
            <div className="grid gap-4">
                <div className="bg-white p-4 shadow rounded">
                    <h1>上传Excel文件</h1>
                    <input type="file" className="mt-4" />
                    <p>
                        XMLHttpRequest Ajax (jQuery) 是 异步网络请求，用来与后端程序通信 fetch,
                        Axios 都是XMLHttpRequest的封装 fetch
                        为浏览器自带的工具，Axios需要单独安装或引入(import) 下一个版本的Node.js
                        会内置 fetch 方法
                    </p>
                    <p className="mt-4 text-2xl">{documentList.length}</p>
                    <button className="border bg-indigo-500 shadow text-white p-4" onClick={click}>
                        111
                    </button>
                </div>
            </div>
        </Layout>
    );
}

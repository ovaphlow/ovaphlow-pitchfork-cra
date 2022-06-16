import md5 from "blueimp-md5";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "../components/Box";
import BoxInput from "../components/BoxInput";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonBack from "../components/ButtonBack";
import ButtonDanger from "../components/ButtonDanger";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default function User() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [dept, setDept] = useState("");

    const handleRemove = () => {
        if (window.confirm("确定要删除当前数据？")) {
            fetch(`/api/simple/user/${id}`, {
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
            fetch(`/api/simple/user/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name, phone, dept }),
            })
                .then((response) => {
                    if (response.status < 400) window.history.back();
                    else throw new Error("操作失败");
                })
                .catch((err) => window.alert(err));
        } else {
            fetch("/api/simple/user", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name, phone, dept, password: md5("111111") }),
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
            fetch(`/api/simple/user/${id}`)
                .then((response) => {
                    if (response.status < 400) return response.json();
                    else throw new Error("请求数据失败");
                })
                .then((data) => {
                    setName(data.name);
                    setPhone(data.phone);
                    setDept(data.dept);
                })
                .catch((err) => window.console.error(err));
        }
    }, [id]);

    return (
        <Layout option="用户">
            <PageTitle text="用户" />
            <Box>
                <div className="flex flex-row mb-8">
                    <ButtonBack />
                </div>
                <div className="flex flex-col gap-4">
                    <BoxInput text="名称" value={name} onChange={(v) => setName(v.target.value)} />
                    <BoxInput
                        text="电话"
                        value={phone}
                        onChange={(v) => setPhone(v.target.value)}
                    />
                    <BoxInput text="部门" value={dept} onChange={(v) => setDept(v.target.value)} />
                </div>
                <div className="mt-8 flex flex-row justify-between">
                    {parseInt(id, 10) > 0 && <ButtonDanger text="删除" onClick={handleRemove} />}
                    <ButtonPrimary text="提交" onClick={handleSubmit} />
                </div>
            </Box>
        </Layout>
    );
}

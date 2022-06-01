import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "../component/Box";
import BoxSelect from "../component/BoxSelect";
import ButtonPrimary from "../component/ButtonPrimary";
import ButtonBack from "../component/ButtonBack";
import Layout from "../component/Layout";
import PageTitle from "../component/PageTitle";

export default function DocumentApprovePjsy() {
    const { id, title } = useParams();

    const [bizDocument, setBizDocument] = useState({ id: 0 });
    const [pbz, setPbz] = useState("无");
    const [pbzList, setPbzList] = useState([]);
    const [qc, setQc] = useState("无");
    const [qcList, setQcList] = useState([]);

    const handleSubmit = () => {
        alert(1);
    };

    useEffect(() => {
        if (parseInt(id, 10) > 0 && title) {
            fetch(`/api/simple/biz/document/${id}/${title}`)
                .then((response) => {
                    if (response.status < 400) return response.json();
                    else throw new Error("请求数据失败");
                })
                .then((data) => {
                    setBizDocument(data);
                    const { pbz, qc } = JSON.parse(data.approve);
                    setPbz(pbz || "无");
                    setQc(qc || "无");
                })
                .catch((err) => window.console.error(err));
        }
    }, [id, title]);

    useEffect(() => {
        const url = [
            "/api/simple/setting",
            "?option=filterBy-detail",
            `&detail=${encodeURI(JSON.stringify({ content: "班组" }))}`,
        ];
        fetch(url.join(""))
            .then((response) => {
                if (response.status < 400) return response.json();
                else throw new Error("请求数据失败");
            })
            .then((data) => {
                // console.log(data, "班组");
                setPbzList(data.map((v) => JSON.parse(v.detail).name));
            })
            .catch((err) => window.console.error(err));
    }, []);

    useEffect(() => {
        const url = [
            "/api/simple/setting",
            "?option=filterBy-detail",
            `&detail=${encodeURI(JSON.stringify({ content: "质检" }))}`,
        ];
        fetch(url.join(""), {
            method: "GET",
            headers: { Authorization: "Bearer: ${jwt}" },
        })
            .then((response) => {
                if (response.status < 400) return response.json();
                else throw new Error("请求数据失败");
            })
            .then((data) => {
                // console.log(data, "质检");
                setQcList(data.map((v) => JSON.parse(v.detail).name));
            })
            .catch((err) => window.console.error(err));
    }, []);

    return (
        <Layout option="一体化作业">
            <PageTitle text="技术员审核" />
            <div className="m-4"></div>
            <div className="flex flex-row mb-4">
                <ButtonBack />
            </div>
            <Box>
                <div className="grid gap-4">
                    <BoxSelect
                        text="班组"
                        value={pbz}
                        onChange={(e) => setPbz(e.target.value)}
                        option={["无"].concat(pbzList)}
                    />
                    <BoxSelect
                        text="质检"
                        value={qc}
                        onChange={(e) => setQc(e.target.value)}
                        option={["无"].concat(qcList)}
                    />
                    <div className="flex flex-row justify-end">
                        <ButtonPrimary text="技术员签字" onClick={handleSubmit} />
                    </div>
                </div>
            </Box>
        </Layout>
    );
}

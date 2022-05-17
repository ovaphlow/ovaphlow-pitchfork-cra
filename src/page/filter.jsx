import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Table, TableTD } from "../component/Container";
import Layout from "../component/Layout";

export default function Filter() {
    const [documentList, setDocumentList] = useState([]);

    useEffect(() => {
        fetch("/api/simple/biz/document")
            .then((response) => {
                if (response.status < 400) return response.json();
                else throw new Error("请求数据失败");
            })
            .then((data) => {
                setDocumentList(data);
            })
            .catch((err) => window.console.error(err));
    }, []);

    return (
        <Layout option="一体化作业">
            <p className="text-3xl">一体化作业</p>
            <div className="mt-4"></div>
            <Box>
                <div className="grid gap-4">
                    <Table thead={["序号", "作业部门", "车组", "作业时间", "标题", "操作"]}>
                        {documentList.map((v, i) => (
                            <tr key={v.id}>
                                <TableTD>
                                    <p className="text-center">{i + 1}</p>
                                </TableTD>
                                <TableTD>
                                    <p className="text-center">
                                        {JSON.parse(v.detail).dept}
                                        <br />
                                        {JSON.parse(v.detail).manager}
                                        <span className="text-slate-600">
                                            ({JSON.parse(v.detail).managerPhone})
                                        </span>
                                    </p>
                                </TableTD>
                                <TableTD>
                                    <p className="text-center">{v.train}</p>
                                </TableTD>
                                <TableTD>
                                    <p className="text-center">
                                        <span>{v.timeBegin}</span>
                                        <br />
                                        <span className="text-slate-500">至</span>
                                        <br />
                                        <span>{v.timeEnd}</span>
                                    </p>
                                </TableTD>
                                <TableTD>
                                    【{JSON.parse(v.detail).category}】{v.title}
                                </TableTD>
                                <TableTD>
                                    <p className="text-center">
                                        <Link to={`/document/${v.id}`} className="text-sky-500">
                                            <FontAwesomeIcon icon={faEdit} fixedWidth />
                                        </Link>
                                    </p>
                                </TableTD>
                            </tr>
                        ))}
                    </Table>
                </div>
            </Box>
        </Layout>
    );
}

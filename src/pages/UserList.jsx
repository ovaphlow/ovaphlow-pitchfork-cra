import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import ButtonPrimary from "../components/ButtonPrimary";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Table, { Td } from "../components/Table";

export default function UserList() {
    const [userList, setUserList] = useState([]);

    const handleRedirect2Save = () => {
        window.location.assign("/user/0");
    };

    useEffect(() => {
        fetch("/api/simple/user")
            .then((response) => {
                if (response.status < 400) return response.json();
                else throw new Error("请求数据失败");
            })
            .then((data) => {
                setUserList(data);
            })
            .catch((err) => window.console.error(err));
    }, []);

    return (
        <Layout option="用户">
            <PageTitle text="用户" />
            <Box>
                <div className="flex flex-row mb-4">
                    <ButtonPrimary text="新增" onClick={handleRedirect2Save} />
                </div>
                <Table thead={["序号", "用户名", "电话", "部门", "操作"]}>
                    {userList.map((v, i) => (
                        <tr key={v.id}>
                            <Td>{i + 1}</Td>
                            <Td>
                                <Link to={`/user/${v.id}`}>
                                    {v.name}
                                    <span className="text-neutral-400">
                                        <FontAwesomeIcon icon={faLink} fixedWidth />
                                    </span>
                                </Link>
                            </Td>
                            <Td>{v.phone}</Td>
                            <Td>{v.dept}</Td>
                            <Td>
                                <Link to={`/user/${v.id}`}>
                                    <FontAwesomeIcon icon={faEdit} fixedWidth />
                                </Link>
                            </Td>
                        </tr>
                    ))}
                </Table>
            </Box>
        </Layout>
    );
}

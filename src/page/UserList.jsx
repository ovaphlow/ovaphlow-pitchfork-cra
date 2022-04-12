import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../component/Button";
import { Box, Table } from "../component/Container";
import Layout from "../component/Layout";
import { PageTitle } from "../component/Title";

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
              <td className="p-2 border border-slate-500 text-center">
                {i + 1}
              </td>
              <td className="p-2 border border-slate-500">{v.name}</td>
              <td className="p-2 border border-slate-500">{v.phone}</td>
              <td className="p-2 border border-slate-500">{v.dept}</td>
              <td className="p-2 border border-slate-500 text-center">
                <Link to={`/user/${v.id}`}>
                  <FontAwesomeIcon icon={faEdit} fixedWidth />
                </Link>
              </td>
            </tr>
          ))}
        </Table>
      </Box>
    </Layout>
  );
}
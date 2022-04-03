import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../component/layout";

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
  }, [])

  return (
    <Layout option="一体化作业">
      <p className="text-3xl">一体化作业</p>
      <div className="bg-white mt-6 p-2">
        <table className="w-full border-collapse border border-slate-500">
          <thead className="bg-slate-300">
            <tr>
              <th className="py-2 border border-slate-500">序号</th>
              <th className="py-2 border border-slate-500">标题</th>
              <th className="py-2 border border-slate-500">操作</th>
            </tr>
          </thead>
          <tbody>
            {documentList.map((v, i) => (
              <tr key={v.id}>
                <td className="p-2 border border-slate-500">{i + 1}</td>
                <td className="p-2 border border-slate-500">{v.title}</td>
                <td className="p-2 border border-slate-500 text-center">
                  <Link to={`/document/${v.id}`} className="text-sky-500">
                    <FontAwesomeIcon icon={faEdit} fixedWidth />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

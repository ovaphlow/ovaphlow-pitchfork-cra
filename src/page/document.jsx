import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonBack, ButtonDanger, ButtonPrimary } from "../component/Button";
import { Input } from "../component/Input";
import Layout from "../component/Layout";

export default function Document() {
  const [pageTitle, setPageTitle] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();

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
    if (id > 0) {
      fetch(`/api/simple/biz/document/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title }),
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
        body: JSON.stringify({ title }),
      })
        .then((response) => {
          if (response.status < 400) window.history.back();
          else throw new Error("操作失败");
        })
        .catch((err) => window.alert(err));
    }
  };

  useEffect(() => {
    if (id > 0) {
      setPageTitle("一体化作业");
    } else setPageTitle("新增作业");
  }, [id]);

  useEffect(() => {
    if (id > 0) {
      fetch(`/api/simple/biz/document/${id}`)
        .then((response) => {
          if (response.status < 400) return response.json();
          else throw new Error("请求数据失败");
        })
        .then((data) => {
          console.log(data);
          setTitle(data.title);
        })
        .catch((err) => window.console.error(err));
    }
  }, [id]);

  return (
    <Layout>
      <p className="text-3xl">{pageTitle}</p>
      <div className="bg-white p-2 mt-6">
        <ButtonBack />
      </div>
      <div className="bg-white p-2 mt-6 w-full">
        <div className="w-full flex">
          <div className="w-24 flex-none text-center pt-1">
            <label>标题</label>
          </div>
          <Input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="w-full flex mt-3">
          <div className="w-24 flex-none text-center pt-1">
            <label>部门</label>
          </div>
          <Input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
      </div>
      <div className="bg-white p-2 mt-6 flex justify-between">
        <ButtonPrimary text="提交" onClick={handleSubmit} />
        {id > 0 && <ButtonDanger text="删除" onClick={handleRemove} />}
      </div>
    </Layout>
  );
}

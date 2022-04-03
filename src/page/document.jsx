import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonBack, ButtonPrimary } from "../component/button";
import { Input } from "../component/input";

import Layout from "../component/layout";

export default function Document() {
  const [pageTitle, setPageTitle] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();

  const handleSubmit = () => {
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
  };

  useEffect(() => {
    if (id > 0) {
      setPageTitle("一体化作业");
    } else setPageTitle("新增作业");
  }, [id]);

  return (
    <Layout>
      <p className="text-3xl">{pageTitle}</p>
      <div className="bg-white p-2 mt-6">
        <ButtonBack />
      </div>
      <div className="bg-white p-2 mt-6 w-full">
        <label>标题</label>
        <Input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="bg-white p-2 mt-6">
        <ButtonPrimary text="提交" onClick={handleSubmit} />
      </div>
    </Layout>
  );
}

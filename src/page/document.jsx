import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../component/button";

import Layout from "../component/layout";

export default function Document() {
  const [pageTitle, setPageTitle] = useState("");
  const { id } = useParams();

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
    </Layout>
  );
}

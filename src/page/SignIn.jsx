import md5 from "blueimp-md5";
import { useEffect, useState } from "react";
import { ButtonPrimary } from "../component/Button";
import { BoxInput } from "../component/Container";
import { PageTitle } from "../component/Title";

export default function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    fetch("/api/simple/user/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, password: md5(password) }),
    })
      .then((response) => {
        if (response.status < 400) window.location.assign("/");
        else throw new Error("用户名或密码错误");
      })
      .catch((err) => window.alert(err));
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-96 bg-white h-auto p-4 grid gap-8">
        <PageTitle text="用户登录" />
        <div className="grid gap-4">
          <BoxInput
            text="用户名称"
            value={name}
            onChange={(v) => setName(v.target.value)}
          />
          <BoxInput
            text="密码"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />
        </div>
        <p className="text-center">
          <ButtonPrimary text="提交" onClick={handleSubmit} />
        </p>
      </div>
    </div>
  );
}

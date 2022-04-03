import {
  faCode,
  faCogs,
  faHome,
  faListCheck,
  faPieChart,
  faPlusSquare,
  faSignOut,
  faUpload,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Layout({ children, option }) {
  return (
    <>
      <div className="bg-slate-800 w-48 h-full fixed flex flex-col">
        <div className="flex-1">
          <p className="text-slate-300 text-2xl text-center py-3">一体化作业</p>
          <ul className="pt-6 pl-5 text-slate-400 grid gap-y-3">
            <li
              className={
                option === "首页" ? "text-slate-100" : "hover:text-slate-100"
              }
            >
              <Link to="/">
                <FontAwesomeIcon icon={faHome} fixedWidth />
                <span className="ml-2">首页</span>
              </Link>
            </li>
            <li className="hover:text-slate-100">
              <Link to="/document">
                <FontAwesomeIcon icon={faListCheck} fixedWidth />
                <span className="ml-2">一体化作业</span>
              </Link>
            </li>
            <li className="hover:text-slate-100">
              <Link to="/document/0">
                <FontAwesomeIcon icon={faPlusSquare} fixedWidth />
                <span className="ml-2">新增作业</span>
              </Link>
            </li>
            <li className="hover:text-slate-100">
              <Link to="/">
                <FontAwesomeIcon icon={faUpload} fixedWidth />
                <span className="ml-2">上传作业计划</span>
              </Link>
            </li>
            <li className="hover:text-slate-100">
              <Link to="/stats">
                <FontAwesomeIcon icon={faPieChart} fixedWidth />
                <span className="ml-2">统计数据</span>
              </Link>
            </li>
            <li className="mt-8 hover:text-slate-100">
              <Link to="/">
                <FontAwesomeIcon icon={faUsers} fixedWidth />
                <span className="ml-2">用户</span>
              </Link>
            </li>
            <li className="hover:text-slate-100">
              <Link to="/">
                <FontAwesomeIcon icon={faCogs} fixedWidth />
                <span className="ml-2">系统设置</span>
              </Link>
            </li>
            <li className="mt-8 hover:text-slate-100">
              <FontAwesomeIcon icon={faSignOut} fixedWidth />
              <span className="ml-2">退出登录</span>
            </li>
          </ul>
        </div>
        <div className="flex-none text-slate-400 text-center text-sm">
          <p>
            开源项目
            <br />
            <FontAwesomeIcon icon={faCode} fixedWidth />
            ovaphlow 2022
          </p>
        </div>
      </div>
      <div className="ml-48 p-3">{children}</div>
    </>
  );
}

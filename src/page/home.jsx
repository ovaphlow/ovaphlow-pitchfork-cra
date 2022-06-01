import Layout from "../component/Layout";
import PageTitle from "../component/PageTitle";

export default function Home() {
    return (
        <Layout option="首页">
            <PageTitle text="首页" />
            <div className="flex flex-row gap-16 mt-8">
                <div className="flex-1 shadow bg-white text-center p-3 rounded flex flex-col gap-3">
                    <p className="text-6xl">11</p>
                    <p className="text-slate-500">作业总数</p>
                </div>
                <div className="flex-1 shadow bg-white text-center p-3 rounded flex flex-col gap-3">
                    <p className="text-6xl">11</p>
                    <p className="text-slate-500">进行中的作业数量</p>
                </div>
                <div className="flex-1 shadow bg-white text-center p-3 rounded flex flex-col gap-3">
                    <p className="text-6xl">11</p>
                    <p className="text-slate-500">今日作业数量</p>
                </div>
            </div>
        </Layout>
    );
}

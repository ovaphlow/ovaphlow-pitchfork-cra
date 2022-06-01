import Box from "../component/Box";
import Layout from "../component/Layout";
import PageTitle from "../component/PageTitle";

export default function Stats() {
    return (
        <Layout>
            <PageTitle text="统计数据" />
            <div className="my-4"></div>
            <Box>
                <div className="grid gap-4">
                    <p className="text-xl">统计图表</p>
                </div>
            </Box>
        </Layout>
    );
}

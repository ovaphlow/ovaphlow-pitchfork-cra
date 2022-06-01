import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import Box from "../component/Box";
import Layout from "../component/Layout";
import PageTitle from "../component/PageTitle";

export default function Stats() {
    const data = [
        { name: "page a", uv: 400, pv: 2400, amt: 2400 },
        { name: "page b", uv: 100, pv: 2400, amt: 2400 },
        { name: "page c", uv: 700, pv: 2400, amt: 2400 },
    ];

    return (
        <Layout>
            <PageTitle text="统计数据" />
            <div className="my-4"></div>
            <Box>
                <div className="grid gap-4">
                    <p className="text-xl">统计图表</p>
                    <div className="w-full h-64">
                        <ResponsiveContainer>
                            <LineChart width={600} height={400} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <CartesianGrid stroke="#CCC" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Box>
        </Layout>
    );
}

const Table = ({ thead, children }) => {
    return (
        <table className="w-full border-collapse border border-slate-500">
            <thead className="bg-slate-300">
                <tr className="text-sm">
                    {thead.map((v, i) => (
                        <th key={i} className="py-2 border border-slate-500">
                            {v}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
};

export const Td = ({ children }) => {
    return <td className="p-2 border border-slate-500">{children}</td>;
};

export default Table;

import PropTypes from "prop-types";
import React from "react";

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

Table.propTypes = {
    thead: PropTypes.object,
    children: PropTypes.node,
};

export const Td = ({ children }) => {
    return <td className="p-2 border border-slate-500">{children}</td>;
};

Td.propTypes = {
    children: PropTypes.node,
};

export default Table;

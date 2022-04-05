import { Input } from "./Input";

export const Box = ({ children }) => {
  return (
    <div className="bg-white p-3 mt-6 w-full shadow-md rounded">{children}</div>
  );
};

export const BoxInput = ({ text, type, value, onChange }) => {
  return (
    <div className="w-full flex">
      <div className="w-24 flex-none text-center pt-1">
        <label>{text}</label>
      </div>
      <Input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export const BoxInputCombo = ({ text, value, datalistId, onChange }) => {
  return (
    <div className="w-full flex">
      <div className="w-24 flex-none text-center pt-1">
        <label>{text}</label>
      </div>
      <Input
        type="text"
        value={value}
        datalistId={datalistId}
        onChange={onChange}
      />
    </div>
  );
};

export const Table = ({ thead, children }) => {
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

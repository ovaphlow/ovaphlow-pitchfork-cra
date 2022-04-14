import { Input } from "./Input";

export const Box = ({ children }) => {
  return (
    <div className="bg-white p-8 w-full shadow-md rounded">{children}</div>
  );
};

export const BoxInput = ({ text, type, value, onChange }) => {
  return (
    <div className="w-full flex">
      <div className="w-32 flex-none text-center pt-1">
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

export const BoxSelect = ({ text, value, onChange, option }) => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-32 flex-none text-center pt-1">
        <label>{text}</label>
      </div>
      <select
        value={value}
        className="flex-1 px-2 py-1 ml-2 border-slate-400 border rounded"
        onChange={onChange}
      >
        {option.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </select>
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

export const TableTD = ({ children }) => {
  return <td className="p-2 border border-slate-500">{children}</td>;
};

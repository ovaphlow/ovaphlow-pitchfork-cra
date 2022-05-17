export const Input = ({ type, value, datalistId, onChange }) => {
    return (
        <input
            type={type || "text"}
            value={value}
            list={datalistId || ""}
            className="flex-1 px-2 py-1 ml-2 border-slate-400 border rounded"
            onChange={onChange}
        />
    );
};

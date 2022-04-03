export const Input = ({ type, value, onChange }) => {
  return (
    <input
      type={type || "text"}
      value={value}
      className="flex-1 px-2 py-1 ml-2 border-slate-600 border rounded"
      onChange={onChange}
    />
  );
};

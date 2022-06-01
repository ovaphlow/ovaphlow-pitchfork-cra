import Input from "./Input";

const BoxInput = ({ text, type, value, onChange }) => {
    return (
        <div className="w-full flex">
            <div className="w-32 flex-none text-center pt-1">
                <label>{text}</label>
            </div>
            <Input type={type} value={value} onChange={onChange} />
        </div>
    );
};

export default BoxInput;

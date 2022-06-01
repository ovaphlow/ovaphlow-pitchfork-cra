const ButtonPrimary = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="bg-indigo-500 p-2 text-white shadow rounded w-24"
            onClick={onClick}
        >
            {text || "提交"}
        </button>
    );
};

export default ButtonPrimary;

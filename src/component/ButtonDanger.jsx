const ButtonDanger = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="bg-red-500 p-2 text-white shadow rounded w-16"
            onClick={onClick}
        >
            {text || "删除"}
        </button>
    );
};

export default ButtonDanger;

const ButtonSecondary = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="bg-teal-500 p-2 text-white shadow rounded w-16"
            onClick={onClick}
        >
            {text || ""}
        </button>
    );
};

export default ButtonSecondary;

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonBack = ({ text }) => {
    return (
        <button
            type="button"
            className="bg-slate-200 shadow rounded px-2 py-1 w-20"
            onClick={() => window.history.back()}
        >
            <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
            {text || "返回"}
        </button>
    );
};

export const ButtonDanger = ({ text, onClick }) => {
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

export const ButtonPrimary = ({ text, onClick }) => {
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

export const ButtonSecondary = ({ text, onClick }) => {
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

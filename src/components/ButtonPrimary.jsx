import PropTypes from "prop-types";
import React from "react";

const ButtonPrimary = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="bg-indigo-400 px-2 py-1 text-white hover:shadow-md rounded w-20"
            onClick={onClick}
        >
            {text || "提交"}
        </button>
    );
};

ButtonPrimary.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonPrimary;

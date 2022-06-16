import PropTypes from "prop-types";
import React from "react";

const ButtonDanger = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="bg-red-400 px-2 py-1 text-white hover:shadow-md rounded w-20"
            onClick={onClick}
        >
            {text || "删除"}
        </button>
    );
};

ButtonDanger.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonDanger;

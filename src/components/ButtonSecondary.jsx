import PropTypes from "prop-types";
import React from "react";

const ButtonSecondary = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="bg-teal-400 px-2 py-1 text-white hover:shadow-md rounded w-20"
            onClick={onClick}
        >
            {text || ""}
        </button>
    );
};

ButtonSecondary.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonSecondary;

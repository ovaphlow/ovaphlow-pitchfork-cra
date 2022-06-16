import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const ButtonBack = ({ text }) => {
    return (
        <button
            type="button"
            className="bg-slate-200 hover:shadow-md rounded px-2 py-1 w-20"
            onClick={() => window.history.back()}
        >
            <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
            {text || "返回"}
        </button>
    );
};

ButtonBack.propTypes = {
    text: PropTypes.string,
};

export default ButtonBack;

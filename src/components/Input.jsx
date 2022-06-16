import PropTypes from "prop-types";
import React from "react";

const Input = ({ type, value, datalistId, onChange }) => {
    return (
        <input
            type={type || "text"}
            value={value}
            list={datalistId || ""}
            className="flex-1 px-2 py-1 border-neutral-400 border rounded"
            onChange={onChange}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    datalistId: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;

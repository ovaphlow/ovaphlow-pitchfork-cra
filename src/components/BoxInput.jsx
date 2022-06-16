import PropTypes from "prop-types";
import React from "react";
import Input from "./Input";

const BoxInput = ({ text, type, value, onChange }) => {
    return (
        <div className="w-full flex flex-row items-center">
            <label className="w-32 text-center">{text}</label>
            <Input type={type} value={value} onChange={onChange} />
        </div>
    );
};

BoxInput.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default BoxInput;

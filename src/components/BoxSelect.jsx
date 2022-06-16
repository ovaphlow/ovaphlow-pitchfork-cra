import PropTypes from "prop-types";
import React from "react";

const BoxSelect = ({ text, value, onChange, option }) => {
    return (
        <div className="w-full flex flex-row">
            <div className="w-32 flex-none text-center pt-1">
                <label>{text}</label>
            </div>
            <select
                value={value}
                className="flex-1 px-2 py-1 ml-2 border-slate-400 border rounded"
                onChange={onChange}
            >
                {option.map((v, i) => (
                    <option key={i} value={v}>
                        {v}
                    </option>
                ))}
            </select>
        </div>
    );
};

BoxSelect.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    option: PropTypes.object,
    onChange: PropTypes.func,
};

export default BoxSelect;

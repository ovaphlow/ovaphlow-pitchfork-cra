import PropTypes from "prop-types";
import React from "react";
import Input from "./Input";

const BoxInputCombo = ({ text, value, datalistId, onChange }) => {
    return (
        <div className="w-full flex">
            <div className="w-32 flex-none text-center pt-1">
                <label>{text}</label>
            </div>
            <Input type="text" value={value} datalistId={datalistId} onChange={onChange} />
        </div>
    );
};

BoxInputCombo.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    datalistId: PropTypes.string,
    onChange: PropTypes.func,
};

export default BoxInputCombo;

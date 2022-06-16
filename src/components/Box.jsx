import PropTypes from "prop-types";
import React from "react";

const Box = ({ children }) => {
    return <div className="bg-white p-4 w-full shadow-md rounded">{children}</div>;
};

Box.propTypes = {
    children: PropTypes.node,
};

export default Box;

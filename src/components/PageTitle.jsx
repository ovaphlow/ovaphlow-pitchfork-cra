import PropTypes from "prop-types";
import React from "react";

const PageTitle = ({ text }) => <p className="text-3xl py-2">{text}</p>;

PageTitle.propTypes = {
    text: PropTypes.string,
};

export default PageTitle;

import React from "react";
import PropTypes from "prop-types";

import "./FormOutputItem.css";

const FormOutputItem = ({ item }) => (
    <p key={item.id} className="form-output__item">
        <span className="form-output__item-title">{item.title}:</span>{" "}
        <span className="form-output__item-value">{item.value}</span>
    </p>
);

FormOutputItem.propTypes = {
    item: PropTypes.object
};

export default FormOutputItem;

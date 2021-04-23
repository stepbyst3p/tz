import React from "react";
import PropTypes from "prop-types";

import "./Field.css";

const Label = props => {
    const { text, inputId } = props;
    return (
        <label className="field__label" htmlFor={inputId}>
            {text}
        </label>
    );
};

Label.propTypes = {
    text: PropTypes.string,
    inputId: PropTypes.string
};

export default React.memo(Label);

import React from "react";

import "./Form.css";

const Label = props => {
    const { text, inputId } = props;
    return (
        <label className="field__label" htmlFor={inputId}>
            {text}
        </label>
    );
};

export default React.memo(Label);

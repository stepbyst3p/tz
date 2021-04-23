import React from "react";

const Input = props => {
    const { field, onChange } = props;

    return React.createElement(field.tag, {
        key: field.id,
        type: field.type,
        id: field.id,
        className: "field__input",
        autoFocus: true,
        onChange: e => onChange(e)
    });
};

export default React.memo(Input);

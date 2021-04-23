import React from "react";
import PropTypes from "prop-types";

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

Input.propTypes = {
    field: PropTypes.object,
    onChange: PropTypes.func
};

export default React.memo(Input);

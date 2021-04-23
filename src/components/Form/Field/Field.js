import React from "react";
import PropTypes from "prop-types";

import Label from "./Label";
import Input from "./Input";

const Field = props => {
    const { field, handleInputChange } = props;

    return (
        <fieldset className="field__group">
            <Label text={field.title} inputId={field.id} />
            <Input field={field} onChange={handleInputChange} />
        </fieldset>
    );
};

Field.propTypes = {
    field: PropTypes.object,
    handleInputChange: PropTypes.func
};

export default React.memo(Field);

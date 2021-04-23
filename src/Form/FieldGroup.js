import React from "react";

import Label from "./Label";
import Input from "./Input";

const FieldGroup = props => {
    const { field, handleInputChange } = props;

    return (
        <fieldset className="field__group">
            <Label text={field.title} inputId={field.id} />
            <Input field={field} onChange={handleInputChange} />
        </fieldset>
    );
};

export default React.memo(FieldGroup);

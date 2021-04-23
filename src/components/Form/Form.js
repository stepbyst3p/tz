import React from "react";
import PropTypes from "prop-types";
import FieldGroup from "./Field";
import Emoji from "../../utils/Emoji";

import "./Form.css";

const Form = props => {
    const { handleInputChange, fields } = props;

    return (
        <>
            <h2>Form</h2>
            <form className="form">
                {fields.length ? (
                    fields.map(field => (
                        <FieldGroup field={field} handleInputChange={handleInputChange} key={field.id} />
                    ))
                ) : (
                    <p>
                        No fields added yet <Emoji symbol="😔" label="no fields" />
                    </p>
                )}
            </form>
        </>
    );
};

Form.propTypes = {
    handleInputChange: PropTypes.func,
    fields: PropTypes.array
};

export default React.memo(Form);

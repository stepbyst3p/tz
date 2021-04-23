import React from "react";
import PropTypes from "prop-types";
import FieldGroup from "./FieldGroup";

import Emoji from "../utils/Emoji";

import "./Form.css";

const Form = props => {
    const { handleInputChange, fields } = props;

    return (
        <form className="form">
            {fields.length ? (
                fields.map(field => <FieldGroup field={field} handleInputChange={handleInputChange} key={field.id} />)
            ) : (
                <p>
                    No fields added yet <Emoji symbol="😔" label="no fields" />
                </p>
            )}
        </form>
    );
};

Form.propTypes = {
    onChange: PropTypes.func,
    fields: PropTypes.array
};

export default React.memo(Form);

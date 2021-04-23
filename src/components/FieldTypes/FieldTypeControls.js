import React from "react";
import PropTypes from "prop-types";

const FieldTypeControls = props => {
    const { field, id, handleRemoveField, handleAddField } = props;

    return (
        <div className="field-type__controls">
            <button value={id} name={field.type} onClick={handleRemoveField} className="field-type__button">
                -
            </button>
            <button value={id} onClick={handleAddField} className="field-type__button">
                +
            </button>
        </div>
    );
};

FieldTypeControls.propTypes = {
    field: PropTypes.object,
    id: PropTypes.number,
    handleRemoveField: PropTypes.func,
    handleAddField: PropTypes.func
};

export default React.memo(FieldTypeControls);

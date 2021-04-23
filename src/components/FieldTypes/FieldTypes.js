import React from "react";
import PropTypes from "prop-types";

import FieldTypeControls from "./FieldTypeControls";
import "./FieldTypes.css";

const FieldTypes = props => {
    const { handleAddField, handleRemoveField, fields } = props;

    return (
        <>
            <h2>Select field type</h2>
            {fields.length
                ? fields.map((field, id) => (
                      <div key={id} className="field-type__item">
                          <span className="field-type__title">{field.title}</span>
                          <FieldTypeControls
                              field={field}
                              id={id}
                              handleRemoveField={handleRemoveField}
                              handleAddField={handleAddField}
                          />
                      </div>
                  ))
                : "No available field types :C"}
        </>
    );
};

FieldTypes.propTypes = {
    handleAddField: PropTypes.func,
    handleRemoveField: PropTypes.func,
    fields: PropTypes.array
};

export default React.memo(FieldTypes);

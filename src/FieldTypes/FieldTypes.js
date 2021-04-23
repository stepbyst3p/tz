import React from "react";
import PropTypes from "prop-types";

import "./FieldTypes.css";

const FieldTypes = props => {
    const { handleAddField, handleRemoveField, fields } = props;

    return fields.length
        ? fields.map((field, id) => (
              <div key={id} className="field-type__item">
                  <span className="field-type__title">{field.title}</span>
                  <button value={id} name={field.type} onClick={handleRemoveField} className="field-type__button">
                      -
                  </button>
                  <button value={id} onClick={handleAddField} className="field-type__button">
                      +
                  </button>
              </div>
          ))
        : "No available field types :C";
};

FieldTypes.propTypes = {
    handleAddField: PropTypes.func,
    handleRemoveField: PropTypes.func,
    fields: PropTypes.array
};

export default React.memo(FieldTypes);

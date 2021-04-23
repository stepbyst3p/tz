import React, { useState } from "react";
import { nanoid } from "nanoid";
import findLastIndex from "lodash/findLastIndex";

import FieldTypes from "./FieldTypes/FieldTypes";
import Form from "./Form/Form";
import FormOutput from "./FormOutput/FormOutput";
import defaultFields from "./defaultFields";

import "./FormBuilder.css";

const FormBuilder = () => {
    const handleAddField = e => {
        const fieldToAdd = { ...availableFields[e.target.value], id: nanoid(8) };
        setFields([...fields, fieldToAdd]);
    };

    const handleRemoveField = e => {
        const fieldIndex = findLastIndex(fields, field => field.type === e.target.name);
        if (fieldIndex < 0) return false;

        const updatedFields = [...fields];
        updatedFields.splice(fieldIndex, 1);
        setFields(updatedFields);
    };

    const handleInputChange = e => {
        const fieldId = e.target.id;
        const updatedFields = [...fields];
        const changedInputIndex = updatedFields.findIndex(field => field.id === fieldId);
        updatedFields[changedInputIndex].value = e.target.value;
        setFields(updatedFields);
    };

    const [availableFields, setAvailableFields] = useState(defaultFields);
    const [fields, setFields] = useState([]);

    return (
        <div className="form-builder__wrapper">
            <aside className="form-builder__left-menu">
                <FieldTypes
                    fields={availableFields}
                    handleAddField={handleAddField}
                    handleRemoveField={handleRemoveField}
                />
            </aside>
            <main className="form-builder__content">
                <Form fields={fields} handleInputChange={handleInputChange} />
                <FormOutput fields={fields} />
            </main>
        </div>
    );
};

export default FormBuilder;

import React from "react";
import PropTypes from "prop-types";

import FormOutputItem from "./FormOutputItem";
import "./FormOutput.css";

const FormOutput = props => {
    const { fields } = props;

    return (
        <div className="form-output__wrapper">
            {fields.length
                ? fields.map(field => <FormOutputItem item={field} key={field.id} />)
                : "Output will be rendered here"}
        </div>
    );
};

FormOutput.propTypes = {
    fields: PropTypes.array
};

export default React.memo(FormOutput);

import React from "react";
import PropTypes from "prop-types";

import "./FormOutput.css";

const FormOutputItem = props => {
    const { item } = props;

    return (
        <p key={item.id} className="form-output__item">
            <span className="form-output__item__title">{item.title}:</span>{" "}
            <span className="form-output__item__value">{item.value}</span>
        </p>
    );
};

FormOutputItem.propTypes = {
    item: PropTypes.object
};

// const areEqual = (prevProps, nextProps) => {
//     console.log(prevProps.item.value, nextProps.item.value);
//     return prevProps.item.value === nextProps.item.value;
// };

// export default React.memo(FormOutputItem, areEqual);
export default FormOutputItem;

import React, { useState } from "react";

const FieldInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className="field">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FieldInput;

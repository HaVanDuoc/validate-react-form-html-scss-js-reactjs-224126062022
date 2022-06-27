import React, { useState } from "react";
import FieldInput from "./FieldInput";
import "./Register.scss";

const Register = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        comfirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            label: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special charater!",
            require: "true",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "It should be a valid email address!",
            require: "true",

        },
        {
            id: 3,
            name: "birthday",
            label: "Birthday",
            type: "date",
            placeholder: "Birthday",
            require: "true",

        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`,
            require: "true",

        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Passwords don't match!",
            pattern: values.password,
            require: "true",

        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <form action="" id="formRegister" onSubmit={handleSubmit}>
            <h2 className="title">Register</h2>
            {inputs.map((input) => (
                <FieldInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Register;

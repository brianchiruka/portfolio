import { useState } from "react";
// require("dotenv").config();
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
};

// form validation custom hook
export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("message" in fieldValues)
      temp.message =
        fieldValues.message.length !== 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(msg, handleSuccess, handleError);
    }
  };

  const msg = {
    subject: "Portfolio Notification",
    name: values.fullName,
    email: values.email,
    message: values.message,
  };

  const PostContactForm = async (msg, successCallback, errorCallback) => {
    // do stuff
    // if successful

    fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "text",
      },
      body: JSON.stringify(
        msg
        // msg.name,
        // msg.email,
        // msg.subject,
        // msg.message,
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        // setMessage("");
        // setName("");
        // setSubject("");
        // setEmail("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};

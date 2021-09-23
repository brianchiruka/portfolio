import { useState } from "react";
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

// console.log(process.env.SENDGRID_API_KEY);

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
    to: "politechiruka@gmail.com", // Change to your recipient
    from: "attomg@gmail.com",
    subject: "Portfolio form notification",
    text: values.fullName + " " + values.email + " " + values.message,
    html: "<strong>'{values.message}</strong>",
  };

  console.log(msg);

  const PostContactForm = async (msg, successCallback, errorCallback) => {
    // do stuff
    // if successful
    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
        handleSuccess();
      })
      .catch((error) => {
        console.error(error);
        handleError();
      });
  };

  // const msg = {
  //   to: "politechiruka@gmail.com", // Change to your recipient
  //   from: "attomg@gmail.com",
  //   subject: "Sending with SendGrid is Fun",
  //   text: "and easy to do anywhere, even with Node.js",
  //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  // };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};

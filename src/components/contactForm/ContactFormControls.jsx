import { useState } from "react";

// Import the functions you need from the SDKs you need
// import firebase from "firebase";

// Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyCKw3K7bFglAHaNk1kdhdc97UPLGuiF_Rk",
//   authDomain: "portofoliocontactform.firebaseapp.com",
//   databaseURL: "https://portofoliocontactform-default-rtdb.firebaseio.com",
//   projectId: "portofoliocontactform",
//   storageBucket: "portofoliocontactform.appspot.com",
//   messagingSenderId: "252593169862",
//   appId: "1:252593169862:web:2cce2d74fea5ba85cabec7",
// };

// Initialize Firebase

// firebase.initializeApp(config);

// Reference messages collection

// var messagesRef = firebase.database().ref("messages");

const PostContactForm = async (values, successCallback, errorCallback) => {
  // do stuff
  // if successful
  if (true) successCallback(console.log(values));
  else errorCallback();
};

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
};

// Save the message to firebase

// function saveMessage(fullName, email, message) {
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     fullName: fullName,
//     email: email,
//     message: message,
//   });
// }

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
    // Save message
    // saveMessage(fullName, email, message);
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
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};

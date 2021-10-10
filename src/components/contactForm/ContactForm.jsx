import { LoadingButton, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useFormControls } from "./ContactFormControls";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10,
  },
];

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField
            variant={"filled"}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            InputProps={{ disableUnderline: true }}
            color="secondary"
            key={index}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            error={errors[inputFieldValue.name]}
            multiline={inputFieldValue.multiline ?? false}
            fullWidth
            rows={inputFieldValue.rows ?? 1}
            autoComplete="none"
            {...(errors[inputFieldValue.name] && {
              error: true,
              helperText: errors[inputFieldValue.name],
            })}
          />
        );
      })}
      <LoadingButton
        loading={loading}
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!formIsValid()}
        onClick={() => setLoading(true)}
      >
        Send Message
      </LoadingButton>
    </form>
  );
};

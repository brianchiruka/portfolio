import { Button, TextField } from "@material-ui/core";
import React from "react";
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
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!formIsValid()}
      >
        Send Message
      </Button>
    </form>
  );
};

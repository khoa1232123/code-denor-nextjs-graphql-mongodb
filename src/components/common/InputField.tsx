import { FormControl, InputProps, TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  textarea?: boolean;
  InputProps?: InputProps;
  size?: "small" | "medium";
  error?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const InputField = ({
  className,
  textarea,
  size,
  error,
  name,
  ...props
}: Props) => {
  return (
    <FormControl className={className}>
      {textarea ? (
        <TextField
          helperText={error}
          rows={4}
          multiline
          size="small"
          className="w-full"
          error={Boolean(error)}
          name={name}
          id={name}
          {...props}
        />
      ) : (
        <TextField
          helperText={error}
          size="small"
          className="w-full"
          error={Boolean(error)}
          name={name}
          id={name}
          {...props}
        />
      )}
    </FormControl>
  );
};

export default InputField;

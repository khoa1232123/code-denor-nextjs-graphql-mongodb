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
};

const InputField = ({ className, textarea, size, ...props }: Props) => {
  const [field, { error }] = useField(props);
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
          {...field}
          id={field.name}
          {...props}
        />
      ) : (
        <TextField
          helperText={error}
          size="small"
          className="w-full"
          error={Boolean(error)}
          {...field}
          id={field.name}
          {...props}
        />
      )}
    </FormControl>
  );
};

export default InputField;

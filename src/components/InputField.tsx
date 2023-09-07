import {
  FormControl,
  FormLabel,
  InputProps,
  TextField,
  TextareaAutosize,
} from "@mui/material";
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
};

const InputField = ({ className, textarea, ...props }: Props) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl className={className}>
      {textarea ? (
        <TextareaAutosize {...field} id={field.name} {...props} />
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

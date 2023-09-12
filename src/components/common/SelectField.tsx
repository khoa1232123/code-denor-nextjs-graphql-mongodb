import { FormControl, InputProps, TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

type OptionValue = {
  title: string;
  value: string;
};

type Props = {
  name: string;
  options: OptionValue[];
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  textarea?: boolean;
  InputProps?: InputProps;
  size?: "small" | "medium";
};

const SelectField = ({ className, options, size, ...props }: Props) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl className={className}>
      <select id={field.name} {...field}>
        {options.map((it) => (
          <option value={it.value}>{it.title}</option>
        ))}
      </select>
    </FormControl>
  );
};

export default SelectField;

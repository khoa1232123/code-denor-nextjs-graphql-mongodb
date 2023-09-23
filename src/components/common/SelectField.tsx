import { FormControl, InputProps } from "@mui/material";
import React, { ChangeEventHandler } from "react";

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
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const SelectField = ({
  className,
  options,
  size,
  name,
  value,
  onChange,
  ...props
}: Props) => {
  return (
    <FormControl className={className}>
      <select id={name} name={name} value={value} onChange={onChange}>
        {options.map((it) => (
          <option value={it.value} key={it.value}>
            {it.title}
          </option>
        ))}
      </select>
    </FormControl>
  );
};

export default SelectField;

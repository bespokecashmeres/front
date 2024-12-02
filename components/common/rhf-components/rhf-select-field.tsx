"use client";

import { DropdownField } from "@/components";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

interface RHFFormDropdownFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[]; // Options for the dropdown
  required?: boolean;
  infoText?: string;
  rules?: object;
  disabled?: boolean; // Prop for disabling the field
  placeholder?: string;
  isClearable?: boolean;
  handleOptionSelect?: (option: any) => void;
  className?: string;
  inputColor?: string;
  indicatorColor?: string;
}

const RHFFormDropdownField: React.FC<RHFFormDropdownFieldProps> = ({
  name,
  label,
  options,
  required = false,
  infoText = "",
  rules = {},
  disabled = false,
  placeholder,
  isClearable,
  handleOptionSelect,
  className,
  indicatorColor,
  inputColor
}) => {
  const { control } = useFormContext(); // Hook form context
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required ? `${label} is Required!` : false,
      ...rules, // Spread the passed rules object
    },
  });

  const handleOnChange = (value: any) => {
    field.onChange(value);
    handleOptionSelect?.(value);
  };

  return (
    <DropdownField
      {...field} // Pass all field props from react-hook-form
      onChange={handleOnChange}
      label={label}
      isClearable={isClearable}
      error={error?.message}
      options={options} // Pass the options to DropdownField
      required={required}
      infoText={infoText}
      disabled={disabled} // Pass disabled state to DropdownField
      placeholder={placeholder}
      className={className}
      inputColor={inputColor}
      indicatorColor={indicatorColor}
    />
  );
};

export default RHFFormDropdownField;

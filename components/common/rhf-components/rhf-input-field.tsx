"use client";

import { InputField } from "@/components";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

interface RHFInputFieldProps {
  name: string;
  label: string;
  required?: boolean;
  infoText?: string;
  rules?: object;
  disabled?: boolean;
  type?: string;
  disableTab?: boolean;
  readOnly?: boolean;
  className?: string;
}

const RHFInputField: React.FC<RHFInputFieldProps> = ({
  name,
  label,
  required = false,
  infoText = "",
  rules = {},
  disabled = false,
  type,
  disableTab = false,
  readOnly = false,
  className = ""
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required ? `${label} is Required!` : false,
      ...rules,
    },
  });

  return (
    <InputField
      {...field}
      className={className}
      label={label}
      type={type}
      error={error?.message}
      required={required}
      infoText={infoText}
      disabled={disabled} // Pass disabled state to InputField
      disableTab={disableTab}
      readOnly={readOnly}
    />
  );
};

export default RHFInputField;

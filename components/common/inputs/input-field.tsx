import { Tooltip } from "@/components";
import clsx from "clsx";
import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  required?: boolean;
  infoText?: string;
  error?: string;
  disabled?: boolean; // New prop for disabling the field
  type?: string;
  disableTab?: boolean;
  readOnly?: boolean;
  className?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      name,
      type,
      error,
      required,
      infoText,
      disabled,
      disableTab,
      readOnly,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="w-full mb-4">
        <label
          htmlFor={name}
          className={clsx(
            "flex items-center mb-1 text-sm font-medium"
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {infoText && (
            <Tooltip className="ml-2">
              <div className="text-xs text-slate-200 dark:text-slate-200 text-center">
                {infoText}
              </div>
            </Tooltip>
          )}
        </label>
        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          disabled={disabled} // Apply disabled state to the input
          className={clsx(
            "w-full p-2 border rounded outline-none"
          )}
          readOnly={readOnly}
          {...(disableTab ? { tabIndex: -1 } : {})}
          {...rest}
        />
        {error && (
          <p className="mt-1 text-xs text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default InputField;

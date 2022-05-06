// pattern: pattern && {
//   value: pattern,
//   message: "Invalid email address",
// }
// match={{
//   value: watch("password"),
//   message: "Password Not Match",
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

import { Input } from "@chakra-ui/react";

// }}
interface props {
  list?: [{ name: string; value: string }];
  label?: string;
  defaultValue?: string | number;
  fieldName?: string;
  className?: string;
  labelClassName?: string;
  optionLabel?: string;
  onChange?: React.ChangeEventHandler;
  type?: string;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  placeholder?: string;
  value?: string | number;
  selectedValue?: string | number;
  valueAsNumber?: boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
  name?: string;
  required?: { value: boolean; message: string };
  match?: {
    value: string;
    message: string;
  };
  // onClick:,
}
export default function Field({
  list,
  label,
  defaultValue,
  fieldName,
  className,
  labelClassName,
  optionLabel,
  onChange,
  type,
  register,
  errors,
  placeholder,
  value,
  selectedValue,
  valueAsNumber,
  pattern,
  name,
  required,
  match,
  ...props
}: props) {
  const inputCondition = (type: string) => {
    if (type === "select") {
      return (
        <>
          <select
            name={name}
            onChange={onChange && onChange}
            defaultValue={defaultValue && defaultValue}
            className={className}
            value={value && value}
            {...props}
            {...(register &&
              fieldName &&
              register(fieldName, {
                required: required && required,
                valueAsNumber: valueAsNumber ? valueAsNumber : false,
              }))}
          >
            <optgroup>
              <option style={{ color: "#8f8f8f" }} value="">
                {optionLabel}
              </option>
              {list?.map(
                (each: { name: string; value: string }, index: number) => {
                  return (
                    <option
                      key={index}
                      style={{ color: "#8f8f8f" }}
                      value={each?.value}
                    >
                      {each?.name}
                    </option>
                  );
                }
              )}
            </optgroup>
          </select>
        </>
      );
    } else {
      return (
        <>
          <Input
            {...props}
            name={name}
            value={value && value}
            defaultValue={defaultValue && defaultValue}
            className={className}
            type={type}
            onChange={onChange && onChange}
            placeholder={placeholder}
            {...(register &&
              fieldName &&
              register(fieldName, {
                required: required && required,
                valueAsNumber: valueAsNumber ? valueAsNumber : false,
                pattern: pattern && pattern,
                validate: (value: string) =>
                  (match && value === match?.value) || match?.message,
              }))}
          />
        </>
      );
    }
  };

  return (
    <>
      <label style={{ color: "white" }} className={labelClassName} htmlFor="">
        &nbsp; {label}
      </label>
      <br />
      {inputCondition(type as string)}
      {errors && errors[fieldName as string] && (
        <span className={labelClassName} style={{ color: "red" }}>
          &nbsp; {errors[fieldName as string]?.message}
        </span>
      )}
    </>
  );
}

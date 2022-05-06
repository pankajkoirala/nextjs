import { FormControl, SelectFieldProps } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { ChangeEventHandler } from "react";
import {
  Controller,
  FieldErrors,
  FieldValues,
  useForm,
  UseFormRegister,
  Control,
  ValidationRule,
} from "react-hook-form";
import { number } from "yup";
interface IProps extends SelectFieldProps {
  list?: Array<{
    label: string;
    value: string;
  }>;
  defaultValue?: string | undefined;
  fieldName?: string;
  customeOnChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  control?: Control;
  placeholder?: string;
  value?: string | number;
  selectedValue?: string | number;
  valueAsNumber: boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
  name?: string;
  required?: { value: boolean; message: string };

  // onClick:,
}
export default function SELECT({
  list,
  defaultValue,
  fieldName,
  customeOnChange,
  register,
  errors,
  placeholder,
  value,
  valueAsNumber,
  pattern,
  required,
  control,
  ...props
}: IProps) {
  return (
    <Controller
      control={control}
      rules={{
        required: required && required,
      }}
      name={(fieldName && fieldName) || ""}
      render={({ field: { onChange }, formState }) => {
        return (
          <FormControl bg={"white"}>
            <Select
              id="color-select"
              name="colors"
              options={list && list}
              defaultInputValue={defaultValue && defaultValue}
              placeholder={placeholder && placeholder}
              closeMenuOnSelect={true}
              onChange={(e: any) => {
                customeOnChange && customeOnChange(e.value);
                onChange(e?.value);
              }}
              size="sm"
            />
          </FormControl>
        );
      }}
    />
  );
}

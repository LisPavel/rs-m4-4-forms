import React, { InputHTMLAttributes } from "react";
import InputWrapper, { InputProps } from "../InputWrapper";

const Input = ({
  description,
  descriptionId,
  error,
  icon,
  ...rest
}: InputProps) => {
  return (
    <input
      {...(rest as Omit<InputHTMLAttributes<HTMLInputElement>, "size">)}
      type="text"
      aria-describedby={description ? descriptionId : undefined}
      aria-invalid={error ? true : undefined}
      data-invalid={error ? true : undefined}
      data-with-icon={icon ? true : undefined}
    />
  );
};

const TextInput = (props: Omit<InputProps, "descriptionId">) => {
  return <InputWrapper {...props} InputComponent={Input} />;
};

export default TextInput;

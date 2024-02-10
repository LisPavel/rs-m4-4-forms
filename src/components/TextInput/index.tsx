import React, { InputHTMLAttributes, useId } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextInput = ({ label, ...rest }: TextInputProps) => {
  const id = useId();

  return (
    <div className="text-input">
      {label && <label htmlFor={id}>{label}</label>}
      <input {...rest} type="text" id={id} />
    </div>
  );
};

export default TextInput;

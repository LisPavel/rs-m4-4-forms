import React, { InputHTMLAttributes, useId } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const TextInput = ({ label, description, ...rest }: TextInputProps) => {
  const id = useId();
  const descriptionId = useId();

  return (
    <div className="text-input">
      {label && <label htmlFor={id}>{label}</label>}
      {description && (
        <div id={descriptionId} className="description">
          {description}
        </div>
      )}
      <input
        {...rest}
        type="text"
        id={id}
        aria-describedby={description ? descriptionId : undefined}
      />
    </div>
  );
};

export default TextInput;

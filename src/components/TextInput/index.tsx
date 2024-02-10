import React, { InputHTMLAttributes, useId } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string | null;
}

const TextInput = ({ label, description, error, ...rest }: TextInputProps) => {
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
        aria-invalid={error ? true : undefined}
        data-invalid={error ? true : undefined}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TextInput;

import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { InputHTMLAttributes, useCallback, useState } from "react";
import { merge } from "../../utils";
import InputWrapper, { InputProps } from "../InputWrapper";

import "./index.scss";

const Input = ({
  description,
  descriptionId,
  error,
  icon,
  sizeClass,
  ...rest
}: InputProps) => {
  const [reveal, setReveal] = useState<boolean>(false);
  const toggleReveal = useCallback(() => {
    setReveal((prev) => !prev);
  }, []);

  return (
    <>
      <input
        {...(rest as Omit<InputHTMLAttributes<HTMLInputElement>, "size">)}
        type={reveal ? "text" : "password"}
        aria-describedby={description ? descriptionId : undefined}
        aria-invalid={error ? true : undefined}
        data-invalid={error ? true : undefined}
        data-with-icon={icon ? true : undefined}
      />
      <div className={merge("right-section", sizeClass)}>
        <button className="reveal-button" type="button" onClick={toggleReveal}>
          {reveal ? <IconEyeOff /> : <IconEye />}
        </button>
      </div>
    </>
  );
};

const PasswordInput = (props: Omit<InputProps, "descriptionId">) => {
  return (
    <InputWrapper
      {...props}
      InputComponent={Input}
      className="password-input"
    />
  );
};

export default PasswordInput;

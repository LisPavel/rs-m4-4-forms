import React, { InputHTMLAttributes, ReactElement, useId } from "react";
import { merge } from "../../utils";
import "./index.scss";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
export type Variants = "filled" | "default" | "unstyled";

export interface InputWrapperProps {
  label?: string;
  description?: string;
  error?: string | boolean | null;
  withAsterisk?: boolean;
  radius?: Sizes;
  size?: Sizes;
  variant?: Variants;
  icon?: ReactElement;
  InputComponent: (props: InputProps) => ReactElement;
  className?: string;
}
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    Omit<InputWrapperProps, "InputComponent"> {
  descriptionId: string;
  sizeClass?: string;
}

const InputWrapper = ({
  label,
  description,
  error,
  withAsterisk,
  radius = "sm",
  variant = "default",
  size = "sm",
  icon,
  InputComponent,
  className,
  ...rest
}: InputWrapperProps) => {
  const id = useId();
  const descriptionId = useId();

  const radiusClass = `radius-${radius}`;
  const variantClass = `variant-${variant}`;
  const sizeClass = `size-${size}`;

  const inputClasses = merge(
    "input",
    variantClass,
    sizeClass,
    variant !== "unstyled" && radiusClass,
  );

  return (
    <div className={merge("custom-input", className)}>
      {label && (
        <label htmlFor={id} className={merge("label", sizeClass)}>
          {label}
          {withAsterisk && <span className={merge("required")}>{" * "}</span>}
        </label>
      )}
      {description && (
        <div id={descriptionId} className={merge("description", sizeClass)}>
          {description}
        </div>
      )}
      <div className={merge("input-wrapper")}>
        {icon && <div className={merge("input-icon", sizeClass)}>{icon}</div>}
        <InputComponent
          {...rest}
          className={inputClasses}
          id={id}
          description={description}
          descriptionId={descriptionId}
          error={error}
          icon={icon}
          sizeClass={sizeClass}
        />
      </div>
      {error && <div className={merge(error, sizeClass)}>{error}</div>}
    </div>
  );
};

export default InputWrapper;

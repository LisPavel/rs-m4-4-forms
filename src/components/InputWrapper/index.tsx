import React, { InputHTMLAttributes, ReactElement, useId } from "react";
import { merge } from "../../utils";
import styles from "./index.module.scss";

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

  const radiusClassKey: keyof typeof styles = `radius-${radius}`;
  const variantClassKey: keyof typeof styles = `variant-${variant}`;
  const sizeClassKey: keyof typeof styles = `size-${size}`;

  const inputClasses = merge(
    styles.input,
    styles[variantClassKey],
    styles[sizeClassKey],
    variant !== "unstyled" && styles[radiusClassKey],
    "input",
    variantClassKey,
    sizeClassKey,
    variant !== "unstyled" && radiusClassKey,
  );

  return (
    <div className={merge(styles["custom-input"], "custom-input", className)}>
      {label && (
        <label
          htmlFor={id}
          className={merge(
            styles.label,
            styles[sizeClassKey],
            "label",
            sizeClassKey,
          )}
        >
          {label}
          {withAsterisk && (
            <span className={merge(styles.requred, "required")}>{" * "}</span>
          )}
        </label>
      )}
      {description && (
        <div
          id={descriptionId}
          className={merge(
            styles.description,
            styles[sizeClassKey],
            "description",
            sizeClassKey,
          )}
        >
          {description}
        </div>
      )}
      <div className={merge(styles["input-wrapper"], "input-wrapper")}>
        {icon && (
          <div
            className={merge(
              styles["input-icon"],
              styles[sizeClassKey],
              "input-icon",
              sizeClassKey,
            )}
          >
            {icon}
          </div>
        )}
        <InputComponent
          {...rest}
          className={inputClasses}
          id={id}
          description={description}
          descriptionId={descriptionId}
          error={error}
          icon={icon}
        />
      </div>
      {error && (
        <div
          className={merge(
            styles.error,
            styles[sizeClassKey],
            error,
            sizeClassKey,
          )}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default InputWrapper;

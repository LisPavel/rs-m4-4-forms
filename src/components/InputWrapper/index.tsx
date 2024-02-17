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
  );

  return (
    <div className={styles["custom-input"]}>
      {label && (
        <label
          htmlFor={id}
          className={[styles.label, styles[sizeClassKey]].join(" ")}
        >
          {label}
          {withAsterisk && <span className={styles.requred}>{" * "}</span>}
        </label>
      )}
      {description && (
        <div
          id={descriptionId}
          className={[styles.description, styles[sizeClassKey]].join(" ")}
        >
          {description}
        </div>
      )}
      <div className={styles["input-wrapper"]}>
        {icon && (
          <div className={merge(styles["input-icon"], styles[sizeClassKey])}>
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
        <div className={[styles.error, styles[sizeClassKey]].join(" ")}>
          {error}
        </div>
      )}
    </div>
  );
};

export default InputWrapper;

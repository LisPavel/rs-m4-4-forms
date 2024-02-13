import React, { InputHTMLAttributes, useId } from "react";
import styles from "./index.module.scss";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
export type Variants = "filled" | "default" | "unstyled";

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  description?: string;
  error?: string | boolean | null;
  withAsterisk?: boolean;
  radius?: Sizes;
  size?: Sizes;
  variant?: Variants;
}

const TextInput = ({
  label,
  description,
  error,
  withAsterisk,
  radius = "sm",
  variant = "default",
  size = "sm",
  ...rest
}: TextInputProps) => {
  const id = useId();
  const descriptionId = useId();

  const radiusClassKey: keyof typeof styles = `radius-${radius}`;
  const variantClassKey: keyof typeof styles = `variant-${variant}`;
  const sizeClassKey: keyof typeof styles = `size-${size}`;

  const inputClasses = [
    styles.input,
    styles[variantClassKey],
    styles[sizeClassKey],
    variant !== "unstyled" && styles[radiusClassKey],
  ]
    .filter(Boolean)
    .join(" ");

  console.log(error);
  return (
    <div className={styles["text-input"]}>
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
        <input
          {...rest}
          className={inputClasses}
          type="text"
          id={id}
          aria-describedby={description ? descriptionId : undefined}
          aria-invalid={error ? true : undefined}
          data-invalid={error ? true : undefined}
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

export default TextInput;

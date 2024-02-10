import React, { InputHTMLAttributes, useId } from "react";
import styles from "./index.module.scss";

type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string | null;
  withAsterisk?: boolean;
  radius?: Sizes;
}

const TextInput = ({
  label,
  description,
  error,
  withAsterisk,
  radius = "sm",
  ...rest
}: TextInputProps) => {
  const id = useId();
  const descriptionId = useId();

  const radiusClass: keyof typeof styles = `radius-${radius}`;

  return (
    <div className={styles["text-input"]}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {withAsterisk && <span className={styles.requred}>{" * "}</span>}
        </label>
      )}
      {description && (
        <div id={descriptionId} className={styles.description}>
          {description}
        </div>
      )}
      <div className={styles["input-wrapper"]}>
        <input
          {...rest}
          className={styles.input + " " + styles[radiusClass]}
          type="text"
          id={id}
          aria-describedby={description ? descriptionId : undefined}
          aria-invalid={error ? true : undefined}
          data-invalid={error ? true : undefined}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextInput;

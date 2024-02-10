import React, { InputHTMLAttributes, useId } from "react";
import styles from "./index.module.scss";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string | null;
  withAsterisk?: boolean;
}

const TextInput = ({
  label,
  description,
  error,
  withAsterisk,
  ...rest
}: TextInputProps) => {
  const id = useId();
  const descriptionId = useId();

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
          className={styles.input}
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

import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";

const InputCustom = ({
	typeInput,
  maxLength,
  minLength,
	refs,
  label,
  value,
  onChange,
  messageError,
  onBlur,
  required,
  validation,
  validationType,
  onclick,
  type = null,
  showError,
  setShowError,
  disabled,
	...rest
}) => {
  const [, setIsActive] = useState(false);
  const [idGenerated, setIdGenerated] = useState(uuidv1());
  

  function handleOnBlur() {
    if (typeof onBlur == "function") {
      onBlur();
    }
    if (validation && setShowError) {
      setShowError(!validation(value));
    }

    setIsActive(false);
  }

  function handleOnFocus() {
    setIsActive(true);
  }

  useEffect(() => {
    setIdGenerated(uuidv1());
  }, []);

  return (
    <>
      <div className="input-field" {...rest}>
            <label
                htmlFor={idGenerated}
            >
                {label}
            </label>
            <input
                onClick={onclick}
                ref={refs}
                autoComplete="false"
                type="text"
                name={idGenerated}
                disabled={disabled}
                id={idGenerated}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                onChange={(event) => {
                if (!onChange) return;
                let value = event.target.value;

                if (type === "number") {
                    value = value.replace(/\D/, "");
                }

                if (typeInput === "CE") {
                    value = value.replace(/[^a-z0-9-]/gi, "");
                }

                onChange(value.replace(/  +/g, ' '));
                }}
            />
      </div>

      {required && showError && (
        <span className="show-error">{messageError || "Error!"}</span>
      )}
    </>
  );
};

export default InputCustom;

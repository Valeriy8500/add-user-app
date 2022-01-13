import React from 'react';

export const Input = ({
  id,
  className,
  type,
  placeholder,
  required,
  onChange,
  value,
  setIsValid,
  validator,
  validatorFlag,
  hint,
  useValidator,
  hintValidator,
  ...props
}) => {
  // const [err, setErr] = useState(false);

  // const isValueSet = (value) => value !== null && value !== undefined && value !== '';

  // const shouldUseValidator = (useValidator) =>
  //   useValidator === null || useValidator === undefined || useValidator === true;

  // const [curHint, setCurHint] = useState(hint);

  // useEffect(() => {
  //   // если поле обязательно и незаполнено
  //   if (required && !isValueSet(value)) {
  //     // то невалидно
  //     setCurHint(hint);
  //     setErr(true);
  //     if (setIsValid) setIsValid(id, false);
  //   } else {
  //     // если есть валидатор
  //     if (shouldUseValidator(useValidator) && validator) {
  //       const isValid = validator();
  //       setCurHint(hintValidator ? hintValidator : hint);
  //       setErr(!isValid);
  //       if (setIsValid) setIsValid(id, isValid);
  //     } else {
  //       setErr(false);
  //       if (setIsValid) setIsValid(id, true);
  //     }
  //   }
  // }, [required, value, validatorFlag, useValidator]);

  return (
    <div>
      <input
        {...props}
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value === null || value === undefined ? '' : value}
      />
      {/* {err && <div className="hint">{curHint}</div>} */}
    </div>
  );
};
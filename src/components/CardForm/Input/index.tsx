/* eslint-disable react/display-name */
import { forwardRef, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

type TInputProps = {
  id: string;
  errors?: FieldError;
} & React.HTMLProps<HTMLInputElement>;

const Input = forwardRef(
  (
    { id, errors, ...rest }: TInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <fieldset>
        <input type="text" id={id} {...rest} ref={ref} />
        {errors && <p>{errors.message}</p>}
      </fieldset>
    );
  }
);

export default Input;

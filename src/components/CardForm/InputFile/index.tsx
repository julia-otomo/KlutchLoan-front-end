/* eslint-disable react/display-name */
import { forwardRef, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

type TInputProps = {
  id: string;
  errors?: FieldError | undefined;
  label: string;
} & React.HTMLProps<HTMLInputElement>;

const InputFile = forwardRef(
  (
    { id, errors, label, ...rest }: TInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <fieldset>
        <div className="flex flex-row">
          <label htmlFor={id}>{label}</label>
          <input type="file" id={id} {...rest} ref={ref} />
        </div>
        {errors && <p>{errors.message}</p>}
      </fieldset>
    );
  }
);

export default InputFile;

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
      <fieldset className="w-full flex flex-col gap-4">
        <input
          type="text"
          id={id}
          {...rest}
          ref={ref}
          className="w-full h-[70px] cursor-pointer border-[1px] border-transparent bg-grey-1 rounded-md text-slate-800 text-lg font-medium"
        />
        {errors && <p className="text-alert-color text-md">{errors.message}</p>}
      </fieldset>
    );
  }
);

export default Input;

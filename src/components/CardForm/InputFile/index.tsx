/* eslint-disable react/display-name */
import { forwardRef, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

type TInputProps = {
  id: string;
  errors?: FieldError | undefined;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputFile = forwardRef(
  (
    { id, errors, label, ...rest }: TInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <fieldset className="w-full bg-grey-1">
        <div className="flex flex-row w-full h-[70px] items-center px-6 justify-between">
          <p className="text-slate-800 text-lg font-medium">{label}</p>
          <label
            htmlFor={id}
            className=" cursor-pointer text-grey-0 hover:underline hover:decoration-grey-0 "
          >
            Adicionar
          </label>
          <input type="file" id={id} {...rest} ref={ref} className="hidden" />
        </div>
        {errors && <p>{errors.message}</p>}
      </fieldset>
    );
  }
);

export default InputFile;

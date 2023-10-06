/* eslint-disable react/display-name */
import { ForwardedRef, forwardRef } from "react";

type TInputRadio = {
  id: string;
  inputValue: string;
  title: string;
} & React.HTMLProps<HTMLInputElement>;

const InputRadio = forwardRef(
  (
    { id, inputValue, title, ...rest }: TInputRadio,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <fieldset className="w-[300px] h-[98px] rounded-md flex flex-col items-center justify-center cursor-pointer checked:bg-brand-1 checked:text-grey-1">
        <input
          type="radio"
          name="contract_type"
          value={id}
          id={id}
          {...rest}
          ref={ref}
          className="hidden"
        />
        <label
          htmlFor={id}
          className=" w-full h-full rounded-md text-center py-8 text-brand-1  text-3xl font-bold cursor-pointer"
        >
          {title}
        </label>
      </fieldset>
    );
  }
);

export default InputRadio;

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
      <fieldset>
        <input
          type="radio"
          name="contract_type"
          value={id}
          id={id}
          {...rest}
          ref={ref}
        />
        <label htmlFor={id}>{title}</label>
      </fieldset>
    );
  }
);

export default InputRadio;

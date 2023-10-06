/* eslint-disable react/display-name */
import { TInstallment, TRateTable } from "@/providers/LoanContext/@types";
import React, { forwardRef, ForwardedRef } from "react";
import Option from "./Option";

type TSelectProps = {
  arr: (TRateTable | TInstallment)[];
  typeSelect: string;
  id: string;
  label: string;
} & React.HTMLProps<HTMLSelectElement>;

const Select = forwardRef(
  (
    { arr, typeSelect, id, label, ...rest }: TSelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <fieldset className="w-[600px] h-[97px] bg-grey-1 rounded-md flex flex-row items-center px-4 justify-between">
        <label htmlFor={id} className="text-brand-1 text-xl font-bold italic">
          {label}
        </label>
        <select
          id={id}
          ref={ref}
          {...rest}
          className="h-[70%] w-[296px] rounded-md"
        >
          {typeSelect === "table"
            ? arr.map((item) => (
                <Option
                  value={String((item as TRateTable).id)}
                  title={(item as TRateTable).name}
                  key={(item as TRateTable).id}
                />
              ))
            : arr.map((item) => (
                <Option
                  title={String((item as TInstallment).installment_number)}
                  value={String((item as TInstallment).id)}
                  key={(item as TInstallment).id}
                />
              ))}
        </select>
      </fieldset>
    );
  }
);

export default Select;

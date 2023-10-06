/* eslint-disable react/display-name */
import { TInstallment, TRateTable } from "@/providers/LoanContext/@types";
import React, { ForwardedRef, forwardRef } from "react";
import Option from "./Option";

type TSelectProps = {
  arr: any;
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
          {arr.map((item) => (
            <React.Fragment key={item.id}>
              {typeSelect == "table" ? (
                <Option
                  value={String(item.id)}
                  title={item.name}
                  key={item.id}
                />
              ) : (
                <Option
                  title={item.installment_number}
                  value={String(item.id)}
                  key={item.id}
                />
              )}
            </React.Fragment>
          ))}
        </select>
      </fieldset>
    );
  }
);

export default Select;

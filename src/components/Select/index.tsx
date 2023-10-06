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
      <fieldset>
        <label htmlFor={id}>{label}</label>
        <select id={id} ref={ref} {...rest}>
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

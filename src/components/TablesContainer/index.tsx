import { LoanContext } from "@/providers/LoanContext";
import { useContext } from "react";
import TableFlowbite from "./Table";

const TablesContainer = () => {
  const { tables } = useContext(LoanContext);
  return (
    <div className="w-4/5 my-0 mx-auto mb-[10rem]">
      {tables.map((table) => (
        <div key={table.id}>
          <h3 className="w-full bg-grey-1 py-4 text-center text-brand-1 text-2xl font-bold shadow-lg ">
            {table.name}
          </h3>
          <TableFlowbite installments={table.installments} table={table} />
        </div>
      ))}
    </div>
  );
};

export default TablesContainer;

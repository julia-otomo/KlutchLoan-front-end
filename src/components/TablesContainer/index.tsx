import { LoanContext } from "@/providers/LoanContext";
import { useContext } from "react";
import TableFlowbite from "./Table";

const TablesContainer = () => {
  const { tables } = useContext(LoanContext);
  return (
    <div className="w-4/5 my-0 mx-auto mb-[6rem]">
      {tables.map((table) => (
        <div key={table.id}>
          <h3>{table.name}</h3>
          <TableFlowbite installments={table.installments} />
        </div>
      ))}
    </div>
  );
};

export default TablesContainer;

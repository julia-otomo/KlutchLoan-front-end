import { LoanContext } from "@/providers/LoanContext";
import { TInstallment, TRateTable } from "@/providers/LoanContext/@types";
import { Table } from "flowbite-react";
import { useContext } from "react";

type TTableProps = {
  installments: TInstallment[];
  table: TRateTable;
};

const TableFlowbite = ({ installments, table }: TTableProps) => {
  const tableHead = [
    "Parcela",
    "Juros da Parcela",
    "Valor Parcela",
    "Valor Total",
    "Comissão Parceiro",
  ];

  const { setInstallment, setTable } = useContext(LoanContext);

  const getInstallment = (inst: TInstallment) => {
    setInstallment(inst);

    setTable(table);
  };

  return (
    <Table hoverable>
      <Table.Head>
        {tableHead.map((head, index) => (
          <Table.HeadCell key={index}>{head}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body className="divide-y">
        {installments.map((item) => (
          <Table.Row
            id={String(item.id)}
            key={item.id}
            onClick={() => getInstallment(item)}
            className=" cursor-pointer"
          >
            <Table.Cell className=" whitespace-nowrap">
              {item.installment_number}
            </Table.Cell>
            <Table.Cell className=" whitespace-nowrap">{`${item.installment_interest}%`}</Table.Cell>
            <Table.Cell className=" whitespace-nowrap">{`R$${item.installment_value.toFixed(
              2
            )}`}</Table.Cell>
            <Table.Cell className=" whitespace-nowrap">{`R$${item.full_value.toFixed(
              2
            )}`}</Table.Cell>
            <Table.Cell className=" whitespace-nowrap">
              {item.comission}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TableFlowbite;

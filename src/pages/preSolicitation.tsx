/* eslint-disable react-hooks/exhaustive-deps */
import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import { useContext, useEffect } from "react";
import { LoanContext } from "@/providers/LoanContext";
import { useForm } from "react-hook-form";
import Select from "@/components/Select";
import PreSolicitationValueContainer from "@/components/PreSolicitationValueContainer";
import TableFlowbite from "@/components/TablesContainer/Table";
import InputRadio from "@/components/InputRadio";
import { useRouter } from "next/router";

type TFormProps = {
  rate_table: string;
  installment: string;
  contract_type: string;
};

const PreSolicitation = () => {
  const router = useRouter();
  const {
    getAllTables,
    tables,
    clientSolicitation,
    retrieveTable,
    table,
    updateSolicitation,
  } = useContext(LoanContext);

  const { register, handleSubmit, setValue } = useForm<TFormProps>({});

  useEffect(() => {
    const allTables = async () => {
      if (clientSolicitation) {
        await getAllTables(clientSolicitation.desired_value);
        await retrieveTable(
          clientSolicitation.rate_table.id,
          clientSolicitation.desired_value
        );

        setValue("rate_table", String(clientSolicitation.rate_table.id));
        setValue("installment", String(clientSolicitation.installment.id));
        setValue("contract_type", clientSolicitation.contract_type);
      }
    };
    allTables();
  }, [clientSolicitation]);

  const onSubmitForm = (data: TFormProps) => {
    const query = `?rate_table=${data.rate_table}&installment=${data.installment}`;

    updateSolicitation({ contract_type: data.contract_type }, query);

    router.push("/solicitation");
  };

  return (
    <>
      <Header />
      <form action="" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex items-center">
          <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
          <Select
            arr={tables.length > 0 ? tables : []}
            id="table"
            label="Tabela"
            typeSelect="table"
            {...register("rate_table")}
            disabled
          />
        </div>

        <div className="flex flex-row">
          <PreSolicitationValueContainer
            title="Valor Desejado"
            value={clientSolicitation ? clientSolicitation.desired_value : 0}
          />
          <PreSolicitationValueContainer
            title="Valor Total do Empréstimo"
            value={clientSolicitation ? clientSolicitation.total_loan : 0}
          />
        </div>

        <div>
          <Select
            arr={
              clientSolicitation
                ? clientSolicitation.rate_table.installments
                : []
            }
            id="installment"
            label="Parcelas"
            typeSelect="installment"
            {...register("installment")}
            disabled
          />
          <PreSolicitationValueContainer
            title="Valor da parcela"
            value={
              clientSolicitation ? clientSolicitation.installment_value : 0
            }
          />
        </div>

        <div>
          <div>
            <InputRadio
              id="automatic"
              inputValue="automatic"
              title="Automático"
              {...register("contract_type")}
            />
            <InputRadio
              id="manual"
              inputValue="manual"
              title="Manual"
              {...register("contract_type")}
            />
          </div>
          <button type="submit">Avançar</button>
        </div>
      </form>
      {clientSolicitation && table ? (
        <TableFlowbite
          installments={table.installments}
          table={clientSolicitation.rate_table}
        />
      ) : null}
    </>
  );
};

export default PreSolicitation;

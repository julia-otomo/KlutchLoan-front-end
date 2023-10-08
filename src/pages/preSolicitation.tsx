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
import InputRadio from "@/components/InputRadio";
import { useRouter } from "next/router";
import ErrorComponent from "@/components/ErrorComponent";
import PresolicitationTable from "@/components/TablesContainer/PreSolicitationTable";

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
      {clientSolicitation ? (
        <form
          action=""
          onSubmit={handleSubmit(onSubmitForm)}
          className=" max-w-[1218px] my-0 mx-auto flex flex-col gap-4 min-h-[750px]"
        >
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

          <div className="flex flex-row gap-8">
            <PreSolicitationValueContainer
              title="Valor Desejado"
              value={clientSolicitation ? clientSolicitation.desired_value : 0}
            />
            <PreSolicitationValueContainer
              title="Valor Total do Empréstimo"
              value={clientSolicitation ? clientSolicitation.total_loan : 0}
            />
          </div>

          <div className="flex flex-row gap-8">
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

          <div className="flex flex-row gap-4">
            <div className=" flex flex-col gap-4">
              <h3 className="text-brand-1">Escolha o tipo de contrato</h3>
              <div className="flex gap-4">
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
            </div>

            <button
              type="submit"
              className=" w-[600px] h-[98px] bg-brand-1 text-white text-3xl font-bold rounded-md mt-8 hover:bg-brand-3"
            >
              ✔ Concluir
            </button>
          </div>
        </form>
      ) : (
        <ErrorComponent />
      )}

      {clientSolicitation && table ? (
        <div className="max-w-[1218px] my-0 mx-auto mb-10">
          <PresolicitationTable
            installments={table.installments}
            table={clientSolicitation.rate_table}
          />
        </div>
      ) : null}
    </>
  );
};

export default PreSolicitation;

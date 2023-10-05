import { LoanContext } from "@/providers/LoanContext";
import { useContext } from "react";
import Link from "next/link";

const FirstPageFooter = () => {
  const { table, installment, updateSolicitation, desiredValue } =
    useContext(LoanContext);

  const update = async () => {
    const data = {
      installment_interest: installment!.installment_interest,
      installment_interest_value:
        (installment!.installment_interest / 100) * desiredValue,
      comission: installment!.comission,
      comission_value: (installment!.comission / 100) * desiredValue,
      installment_value: installment!.installment_value,
      total_loan: installment!.full_value,
    };

    const queryParam = `?rateTable=${table!.id}&installment=${installment!.id}`;

    await updateSolicitation(data, queryParam);
  };

  return (
    <div className="flex w-full items-center justify-center h-[86px] bg-brand-1 gap-[10%] fixed bottom-0">
      <div className="flex text-slate-100">
        <h3>{`Nome: ${table?.name}`}</h3>
        <h3>{`Parcelas: ${installment?.installment_number}`}</h3>
        <h3>{`Valor da Parcela: R$${installment?.installment_value.toFixed(
          2
        )}`}</h3>
      </div>
      <Link href="/client" onClick={update}>
        Avançar
      </Link>
    </div>
  );
};

export default FirstPageFooter;

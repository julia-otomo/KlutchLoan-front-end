import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import Link from "next/link";
import { useContext } from "react";
import { LoanContext } from "@/providers/LoanContext";
import {
  ConfirmedCardContainer,
  ConfirmedValueContainer,
} from "@/components/ConfirmedValueContainer";

const SolicitationPage = () => {
  const { clientSolicitation } = useContext(LoanContext);
  return (
    <>
      <Header />
      <Information img1={plus} img2={file} text="Solicitar Empréstimo" />

      <main>
        <h2>Solicitação Realizada com Sucesso!</h2>
        <div>
          <h3>Resumo da Solicitação</h3>
          <div className="flex flex-wrap">
            <ConfirmedValueContainer
              title={clientSolicitation ? clientSolicitation.client.name : ""}
              value={clientSolicitation ? clientSolicitation.client.phone : ""}
            />
            <ConfirmedValueContainer
              title="Taxa de Juros"
              value={`${
                clientSolicitation
                  ? clientSolicitation.installment_interest
                  : ""
              }%`}
            />
            <ConfirmedCardContainer
              card={
                clientSolicitation
                  ? clientSolicitation.card_number.slice(0, 4)
                  : ""
              }
              date={
                clientSolicitation
                  ? clientSolicitation.client.cards[0].expiration_date
                  : ""
              }
            />
            <ConfirmedValueContainer
              title="Parcelas"
              value={`${
                clientSolicitation
                  ? clientSolicitation.installment.installment_number
                  : ""
              }`}
            />
            <ConfirmedValueContainer
              title="Valor desejado"
              value={`R$${
                clientSolicitation
                  ? clientSolicitation.desired_value.toFixed(2)
                  : 0
              }`}
            />
            <ConfirmedValueContainer
              title="Valor da Parcela"
              value={`R$${
                clientSolicitation
                  ? clientSolicitation.installment_value.toFixed(2)
                  : ""
              }`}
            />
            <ConfirmedValueContainer
              title="Valor Total do Empréstimo"
              value={`R$${
                clientSolicitation
                  ? clientSolicitation.total_loan.toFixed(2)
                  : ""
              }`}
            />
          </div>
        </div>
        <Link href="/details">Detalhe da Solicitação</Link>
      </main>
    </>
  );
};

export default SolicitationPage;

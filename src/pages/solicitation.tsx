import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LoanContext } from "@/providers/LoanContext";
import {
  ConfirmedCardContainer,
  ConfirmedValueContainer,
} from "@/components/ConfirmedValueContainer";
import ErrorComponent from "@/components/ErrorComponent";
import { TCard } from "@/providers/LoanContext/@types";

const SolicitationPage = () => {
  const { clientSolicitation } = useContext(LoanContext);

  const [clientCard, setClientCard] = useState<TCard | null>(null);

  useEffect(() => {
    const findCard = () => {
      if (clientSolicitation) {
        const cardFound = clientSolicitation.client.cards.find(
          (card) => card.card_number == clientSolicitation.card_number
        );

        if (cardFound) {
          setClientCard(cardFound);
        }
      }
    };

    findCard();
  }, [clientSolicitation]);

  return (
    <>
      <Header />
      <div className="max-w-[1266px] my-0 mx-auto">
        <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
      </div>

      {clientSolicitation ? (
        <main className="max-w-[1266px] my-0 mx-auto flex flex-col items-center mt-8 gap-8 min-h-[800px]">
          <h2 className="text-brand-1 text-2xl font-bold">
            Solicitação Realizada com Sucesso!
          </h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-brand-1 text-xl ">Resumo da Solicitação</h3>
            <div className="flex flex-wrap gap-8">
              <ConfirmedValueContainer
                title={clientSolicitation ? clientSolicitation.client.name : ""}
                value={
                  clientSolicitation ? clientSolicitation.client.phone : ""
                }
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
                date={clientCard ? clientCard.expiration_date : ""}
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
          <div className=" flex flex-col gap-4 mt-10 items-center">
            <Link
              href="/details"
              className="w-[420px] h-[94px] bg-brand-1 rounded-md text-white text-3xl font-bold text-center py-8 hover:bg-brand-3"
            >
              Detalhe da Solicitação
            </Link>
            <p className="text-brand-1">O CredFica avaliará a solicitação</p>
          </div>
        </main>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};

export default SolicitationPage;

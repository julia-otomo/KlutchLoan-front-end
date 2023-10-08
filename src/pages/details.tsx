import Header from "@/components/Header";
import file from "../assets/orange-file.svg";
import DetailsInformation from "@/components/Information/DetailsPage";
import DetailsHeader from "@/components/DetailsHeader";
import { useContext, useEffect, useState } from "react";
import { LoanContext } from "@/providers/LoanContext";
import ValueCard from "@/components/DetailsMain/ValueCard";
import CardImages from "@/components/DetailsMain/CardImages";
import CardInformation from "@/components/DetailsMain/CardInformation";
import FinalClientInformation from "@/components/DetailsMain/FinalClientInformation";
import ButtonsContainer from "@/components/DetailsMain/ButtonsContainer";
import ErrorComponent from "@/components/ErrorComponent";
import { TCard } from "@/providers/LoanContext/@types";

const DetailsPage = () => {
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
      <div className=" max-w-[70%] my-0 mx-auto mb-8 ">
        <DetailsInformation img={file} text="Detalhe de Solicitação" />
      </div>

      {clientSolicitation ? (
        <main className="flex items-center max-w-[70%] my-0 mx-auto gap-8  min-h-[1000px]">
          <div className="flex flex-col w-[586px] gap-3 min-h-[1100px]">
            <DetailsHeader
              title="Sistema gerado por"
              value="Sistema Credfica"
            />
            <div className="flex flex-wrap gap-3">
              <ValueCard
                title="Valor Total"
                value={clientSolicitation ? clientSolicitation.total_loan : 0}
              />
              <ValueCard
                title="Valor a depositar"
                value={
                  clientSolicitation ? clientSolicitation.desired_value : 0
                }
              />
              {clientSolicitation ? (
                <>
                  <CardImages
                    title="Frente do cartão"
                    url={clientSolicitation!.client.cards[0].front_image}
                  />
                  <CardImages
                    title="Verso do cartão"
                    url={clientSolicitation!.client.cards[0].back_image}
                  />
                  <CardImages
                    title="Selfie com cartão"
                    url={clientSolicitation!.client.cards[0].selfie_image}
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col w-[586px] gap-3 min-h-[1100px]">
            <DetailsHeader
              title="Fluxo da Solicitação:"
              value={
                clientSolicitation &&
                clientSolicitation.contract_type == "manual"
                  ? "Manual"
                  : "Automático"
              }
            />
            <CardInformation
              card_number={
                clientSolicitation ? clientSolicitation.card_number : ""
              }
              date={clientCard ? clientCard.expiration_date : ""}
              cvv={clientCard ? clientCard.cvv : ""}
              installment_number={
                clientSolicitation
                  ? clientSolicitation.installment.installment_number
                  : 0
              }
              installment_value={
                clientSolicitation ? clientSolicitation.installment_value : 0
              }
              table={
                clientSolicitation ? clientSolicitation.rate_table.name : ""
              }
            />
            <FinalClientInformation
              name={clientSolicitation ? clientSolicitation.client.name : ""}
              cpf={clientSolicitation ? clientSolicitation.client.cpf : ""}
              bank_label={
                clientSolicitation
                  ? clientSolicitation.client.bank.bank_label
                  : ""
              }
              account_type={
                clientSolicitation
                  ? clientSolicitation.client.bank.account_type_label
                  : ""
              }
              account_number={
                clientSolicitation
                  ? clientSolicitation.client.bank.account_number
                  : ""
              }
            />
            <ButtonsContainer />
          </div>
        </main>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};

export default DetailsPage;

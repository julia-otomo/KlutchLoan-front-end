import { BsCreditCard2FrontFill } from "react-icons/bs";

type TCardInformation = {
  card_number: string;
  date: string;
  cvv: string;
  installment_number: number;
  installment_value: number;
  table: string;
};

const CardInformation = ({
  card_number,
  date,
  cvv,
  installment_number,
  installment_value,
  table,
}: TCardInformation) => {
  return (
    <div className="w-[586px] h-[333px] bg-grey-1 rounded-md flex flex-col gap-4 items-center p-8">
      <p className=" self-start text-lg text-grey-0">Modalidade:</p>
      <div className="flex items-center gap-4 ">
        <h2 className="text-2xl text-grey-0 italic font-bold">
          Cartão de Crédito
        </h2>
        <BsCreditCard2FrontFill className="fill-brand-2 w-[2rem] h-[2rem]" />
      </div>

      <p className="text-xl text-grey-0 italic font-bold">{`Número do cartão: ${card_number}`}</p>
      <div className="flex">
        <p className="text-xl text-grey-0 italic font-bold">{`Validade: ${date}`}</p>
        <p className="text-xl text-grey-0 italic font-bold">{`CVV: ${cvv}`}</p>
      </div>
      <p className="text-xl text-grey-0 italic font-bold">
        {`${installment_number} parcelas de: `}{" "}
        <span className="text-xl text-money-color italic font-bold">{`R$ ${installment_value.toFixed(
          2
        )}`}</span>
      </p>
      <p className="text-xl text-grey-0 italic font-bold">{`Tabela: ${table}`}</p>
    </div>
  );
};

export default CardInformation;

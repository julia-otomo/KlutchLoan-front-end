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
    <div>
      <div className="flex">
        <h2>Cartão de Crédito</h2>
        <BsCreditCard2FrontFill />
      </div>

      <p>{`Número do cartão: ${card_number}`}</p>
      <div className="flex">
        <p>{`Validade: ${date}`}</p>
        <p>{`CVV: ${cvv}`}</p>
      </div>
      <p>
        {`${installment_number} parcelas de: `}{" "}
        <span>{`R$ ${installment_value.toFixed(2)}`}</span>
      </p>
      <p>{`Tabela: ${table}`}</p>
    </div>
  );
};

export default CardInformation;

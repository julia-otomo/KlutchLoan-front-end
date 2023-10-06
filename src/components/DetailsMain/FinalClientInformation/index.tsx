type TFinalClientInformation = {
  name: string;
  cpf: string;
  bank_label: string;
  account_type: string;
  account_number: string;
};

const FinalClientInformation = ({
  name,
  cpf,
  bank_label,
  account_type,
  account_number,
}: TFinalClientInformation) => {
  return (
    <div className="w-[586px] h-[332px] p-8 flex flex-col gap-4 text-grey-0 text-lg italic font-bold bg-grey-1 rounded-md">
      <p className=" font-normal not-italic ">Informações do Cliente:</p>
      <p>{`Nome: ${name}`}</p>
      <p>{`CPF: ${cpf}`}</p>
      <p>{`Banco: ${bank_label}`}</p>
      <p>{`Tipo de Conta: ${
        account_type == "current account" ? "Conta Corrente" : "Poupança"
      }`}</p>
      <p>{`Número da conta: ${account_number}`}</p>
    </div>
  );
};

export default FinalClientInformation;

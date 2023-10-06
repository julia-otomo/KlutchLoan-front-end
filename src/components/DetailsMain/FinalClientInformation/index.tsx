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
    <div>
      <p>Informações do Cliente:</p>
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

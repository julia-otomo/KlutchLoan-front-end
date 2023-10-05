import { LoanContext } from "@/providers/LoanContext";
import { useContext } from "react";

const ClientForm = () => {
  const { getClient, setValueInput, valueInput, client } =
    useContext(LoanContext);

  const clientRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getClient(valueInput!);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2>Valor desejado</h2>
      <form action="" onSubmit={clientRequest}>
        <input
          type="text"
          placeholder="Digite o CPF"
          onChange={(event) => setValueInput(event.currentTarget.value)}
        />

        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default ClientForm;

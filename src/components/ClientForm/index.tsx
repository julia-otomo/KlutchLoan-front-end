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
    <div className="w-full flex flex-col items-center justify-center gap-8 mb-8">
      <h2 className="text-brand-1 text-3xl">Busque o Cliente</h2>
      <form action="" onSubmit={clientRequest}>
        <div className="flex flex-row h-[61px] w-[473px] bg-grey-1 rounded-md">
          <input
            type="text"
            placeholder="Digite o CPF"
            onChange={(event) => setValueInput(event.currentTarget.value)}
            className="border-0 outline-0 w-[70%]  bg-grey-1"
          />

          <button
            type="submit"
            className="text-center bg-brand-1 w-[30%] rounded-r-md text-grey-1 text-lg hover:bg-brand-3 font-medium"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;

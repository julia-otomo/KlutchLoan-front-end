import { LoanContext } from "@/providers/LoanContext";
import { useContext } from "react";

const ValueForm = () => {
  const {
    setValueInput,
    valueInput,
    createOrUpdateSolicitation,
    getAllTables,
  } = useContext(LoanContext);

  const valueRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valueData = {
      desired_value: Number(valueInput),
    };

    createOrUpdateSolicitation(valueData);

    getAllTables(Number(valueInput));
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 mb-[3rem]">
      <h2 className="text-[44px] text-brand-1 font-bold">Valor Desejado</h2>

      <form action="" onSubmit={valueRequest} className="flex flex-row gap-4">
        <input
          type="number"
          placeholder="R$0,00"
          onChange={(event) => setValueInput(event.currentTarget.value)}
          className="w-[473px] h-[56px] bg-grey-1 rounded-md border-none outline-none focus:bg-white cursor-pointer text-center text-lg"
        />
        <button
          type="submit"
          className="w-[160px] h-[56px] bg-brand-2 text-white font-semibold rounded-md hover:bg-brand-4"
        >
          Calcular
        </button>
      </form>
    </div>
  );
};

export default ValueForm;

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
    <div className="w-full flex flex-col items-center">
      <h2>Valor Desejado</h2>

      <form action="" onSubmit={valueRequest}>
        <input
          type="number"
          placeholder="R$0,00"
          onChange={(event) => setValueInput(event.currentTarget.value)}
        />
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default ValueForm;

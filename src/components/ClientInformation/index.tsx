import { LoanContext } from "@/providers/LoanContext";
import Link from "next/link";
import { useContext } from "react";

const ClientInformation = () => {
  const { client, updateSolicitation } = useContext(LoanContext);

  const addClient = () => {
    const query = `?client=${client!.id}`;

    updateSolicitation(undefined, query);
  };

  return (
    <div className="w-[473px] h-[355px] bg-grey-1 flex flex-col p-8 items-center">
      <h3>Cliente encontrado:</h3>
      <h3>{client?.cpf}</h3>
      <h3>{client?.name}</h3>
      <Link href="/modality" onClick={addClient}>
        Solicitar
      </Link>
    </div>
  );
};

export default ClientInformation;

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
    <div className="w-[473px] h-[355px] bg-grey-1 flex flex-col p-8 items-center my-0 mx-auto rounded-md gap-8">
      <h3 className=" text-slate-500 text-3xl">Cliente encontrado:</h3>
      <h3 className=" text-brand-2 text-3xl">
        {client?.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
      </h3>
      <h3 className="text-brand-1 text-2xl font-bold">{client?.name}</h3>
      <Link
        href="/modality"
        onClick={addClient}
        className="h-[98px] w-[90%] bg-brand-1 text-4xl py-6 text-center text-grey-1 rounded-md hover:bg-brand-3"
      >
        Solicitar
      </Link>
    </div>
  );
};

export default ClientInformation;

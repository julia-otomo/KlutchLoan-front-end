import Link from "next/link";

const ModalityContainer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h2 className="text-2xl text-brand-1">Escolha a modalidade:</h2>
      <Link
        href="/card"
        className="w-[391px] h-[98px] bg-brand-1 text-3xl text-grey-1 font-bold rounded-md py-8 text-center hover:bg-brand-3"
      >
        Cartão de Crédito
      </Link>
      <p className="text-2xl">Ou</p>
      <div className="flex flex-col">
        <button
          disabled
          className="w-[391px] h-[98px] bg-brand-1 text-3xl text-grey-1 font-bold rounded-md py-8 text-center bg-opacity-40"
        >
          Crédito Consignado
        </button>
        <p className="self-end text-xl text-grey-0">Em Breve</p>
      </div>
    </div>
  );
};

export default ModalityContainer;

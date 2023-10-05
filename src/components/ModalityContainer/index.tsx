import Link from "next/link";

const ModalityContainer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2>Escolha a modalidade</h2>
      <Link href="/card">Cartão de Crédito</Link>
      <p>Ou</p>
      <div className="flex flex-col">
        <button disabled>Credíto Consignado</button>
        <p className=" self-end">Em Breve</p>
      </div>
    </div>
  );
};

export default ModalityContainer;

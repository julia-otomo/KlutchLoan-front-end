import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import ClientForm from "@/components/ClientForm";
import { useContext } from "react";
import { LoanContext } from "@/providers/LoanContext";
import ClientInformation from "@/components/ClientInformation";

const ClientPage = () => {
  const { client } = useContext(LoanContext);
  return (
    <>
      <Header />
      <div className="max-w-[1218px] my-0 mx-auto">
        <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
      </div>
      <ClientForm />
      {client && <ClientInformation />}
    </>
  );
};

export default ClientPage;

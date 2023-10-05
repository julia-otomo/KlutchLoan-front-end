import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import ValueForm from "@/components/ValueForm";
import { useContext } from "react";
import { LoanContext } from "@/providers/LoanContext";
import TablesContainer from "@/components/TablesContainer";

const Home = () => {
  const { tables } = useContext(LoanContext);
  return (
    <>
      <Header />
      <Information img1={plus} img2={file} text="Simulação de Taxas" />
      <ValueForm />
      {tables.length > 0 && <TablesContainer />}
    </>
  );
};

export default Home;

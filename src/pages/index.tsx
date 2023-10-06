import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import ValueForm from "@/components/ValueForm";
import { useContext } from "react";
import { LoanContext } from "@/providers/LoanContext";
import TablesContainer from "@/components/TablesContainer";
import FirstPageFooter from "@/components/FirstPageFooter";

const Home = () => {
  const { tables, installment } = useContext(LoanContext);
  return (
    <>
      <Header />
      <div className="max-w-[1218px] my-0 mx-auto">
        <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
      </div>
      <ValueForm />
      {tables.length > 0 && <TablesContainer />}
      {installment && <FirstPageFooter />}
    </>
  );
};

export default Home;

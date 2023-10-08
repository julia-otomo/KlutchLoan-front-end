import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import ValueForm from "@/components/ValueForm";
import { useContext } from "react";
import { LoanContext } from "@/providers/LoanContext";
import TablesContainer from "@/components/TablesContainer";
import FirstPageFooter from "@/components/FirstPageFooter";
import ErrorComponent from "@/components/ErrorComponent";
import Loading from "@/components/Loading";

const Home = () => {
  const { tables, installment, loading, errorResponse } =
    useContext(LoanContext);
  return (
    <>
      <Header />
      <div className="max-w-[1218px] my-0 mx-auto">
        <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
      </div>
      <ValueForm />

      {loading ? (
        <div className="w-full flex items-center">
          <Loading />
        </div>
      ) : errorResponse ? (
        <ErrorComponent />
      ) : tables.length > 0 ? (
        <TablesContainer />
      ) : null}

      {installment ? <FirstPageFooter /> : null}
    </>
  );
};

export default Home;

import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import ModalityContainer from "@/components/ModalityContainer";

const ModalityPage = () => {
  return (
    <>
      <Header />
      <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
      <ModalityContainer />
    </>
  );
};

export default ModalityPage;

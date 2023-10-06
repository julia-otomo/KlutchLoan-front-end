import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import ModalityContainer from "@/components/ModalityContainer";

const ModalityPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1218px] my-0 mx-auto">
        <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
      </div>
      <ModalityContainer />
    </>
  );
};

export default ModalityPage;

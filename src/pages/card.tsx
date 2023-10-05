import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";

const CardRegister = () => {
  return (
    <>
      <Header />
      <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
    </>
  );
};

export default CardRegister;

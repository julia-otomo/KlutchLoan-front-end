import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";
import CardForm from "@/components/CardForm";

const CardRegister = () => {
  return (
    <>
      <Header />
      <Information img1={plus} img2={file} text="Solicitar Empréstimo" />
      <CardForm />
    </>
  );
};

export default CardRegister;

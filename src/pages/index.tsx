import Header from "@/components/Header";
import Information from "@/components/Information";
import file from "../assets/orange-file.svg";
import plus from "../assets/plus.svg";

export default function Home() {
  return (
    <>
      <Header />
      <Information img1={plus} img2={file} text="Simulação de Taxas" />
    </>
  );
}

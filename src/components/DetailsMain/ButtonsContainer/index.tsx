import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ButtonsContainer = () => {
  const today = new Date();

  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();

  return (
    <div className="w-[586px] h-[274px] rounded-md bg-brand-5 border-[1px] border-brand-1  border-dotted flex flex-col gap-4 p-4">
      <p className="text-lg text-grey-0">Informações Gerais:</p>
      <div className="flex flex-col gap-4 items-center">
        <p className="text-lg text-slate-800 italic font-bold">
          {`Data: ${day}/${month}/${year}`}{" "}
        </p>
        <button className="flex flex-row items-center justify-center gap-4 w-[282px] h-[53px] rounded-md bg-brand-2 text-white text-lg font-bold">
          <FiAlertCircle className="w-[1.5rem] h-[1.5rem]" />
          Aguardando
        </button>
        <div className="flex gap-4 items-center">
          <button className="flex flex-row items-center justify-center gap-4 w-[209px] h-[53px] rounded-md bg-brand-1 text-white text-lg font-bold">
            <AiOutlineCheckCircle className="w-[1.5rem] h-[1.5rem]" />
            Pré Aprovar
          </button>
          <button className="flex flex-row items-center justify-center gap-4 w-[209px] h-[53px] rounded-md bg-alert-color text-white text-lg font-bold">
            <FiAlertCircle className="w-[1.5rem] h-[1.5rem]" />
            Reprovar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsContainer;

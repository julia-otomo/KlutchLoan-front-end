import { FiAlertCircle } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ButtonsContainer = () => {
  const today = new Date();

  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();

  return (
    <div>
      <p>{`Data: ${day}/${month}/${year}`} </p>
      <button>
        <FiAlertCircle />
        Aguardando
      </button>
      <div>
        <button>
          <AiOutlineCheckCircle />
          Pré Aprovar
        </button>
        <button>
          <FiAlertCircle />
          Reprovar
        </button>
      </div>
    </div>
  );
};

export default ButtonsContainer;

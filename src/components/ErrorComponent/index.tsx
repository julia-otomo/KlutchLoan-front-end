import { MdOutlineError } from "react-icons/md";

const ErrorComponent = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <MdOutlineError className="fill-brand-2 w-8 h-8" />
      <h2 className="text-2xl text-brand-1 ">
        Algo deu errado ! Tente reiniciar a página.
      </h2>
    </div>
  );
};

export default ErrorComponent;

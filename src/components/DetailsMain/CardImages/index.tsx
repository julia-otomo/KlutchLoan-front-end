import Link from "next/link";
import { AiTwotoneFile } from "react-icons/ai";

type TCardImages = {
  title: string;
  url: string;
};

const CardImages = ({ title, url }: TCardImages) => {
  return (
    <div className="w-[278px] h-[284px] bg-text-1 rounded-md flex flex-col items-center py-8 gap-10 bg-grey-1">
      <p className="text-grey-0 text-2xl">{title}</p>
      <AiTwotoneFile className=" fill-brand-2 w-[4rem] h-[4rem]" />
      <Link
        href={`http://res.cloudinary.com/dojrawoma/${url}`}
        target="_blank"
        className=" cursor-pointer text-brand-1 hover:underline hover:decoration-brand-1 text-xl"
      >
        Ver Comprovante
      </Link>
    </div>
  );
};

export default CardImages;

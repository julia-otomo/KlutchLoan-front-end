import Link from "next/link";
import { AiOutlineFile } from "react-icons/ai";

type TCardImages = {
  title: string;
  url: string;
};

const CardImages = ({ title, url }: TCardImages) => {
  return (
    <div>
      <p>{title}</p>
      <AiOutlineFile />
      <Link href={url} target="_blank">
        Ver Comprovante
      </Link>
    </div>
  );
};

export default CardImages;

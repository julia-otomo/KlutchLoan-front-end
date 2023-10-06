import Image from "next/image";

type TInformationProps = {
  img1: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  img2: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  text: string;
};

const Information = ({ img1, img2, text }: TInformationProps) => {
  return (
    <div className="mt-[59px] w-full flex items-center ">
      <div className="w-[60%] py-8 flex items-center gap-8">
        <Image src={img1} alt="" />
        <Image src={img2} alt="" />
        <h2 className=" text-brand-1 text-[3.5rem] max-w-[300px] font-bold">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Information;

import Image from "next/image";

type TDetailsInformation = {
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  text: string;
};

const DetailsInformation = ({ img, text }: TDetailsInformation) => {
  return (
    <div className="mt-[59px] w-full flex items-center">
      <div className="w-[60%] py-8 flex items-center gap-8">
        <Image src={img} alt="" />
        <h2 className=" text-brand-1 text-[3.5rem] max-w-[300px] font-bold">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default DetailsInformation;

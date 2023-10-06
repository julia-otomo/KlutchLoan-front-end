import { title } from "process";
import { BsCheckLg, BsCreditCardFill } from "react-icons/bs";

type TConfirmedValueContainer = {
  title: string;
  value: string;
};

type TConfirmedCardContainer = {
  card: string;
  date: string;
};

const ConfirmedValueContainer = ({
  title,
  value,
}: TConfirmedValueContainer) => {
  return (
    <div className="flex flex-row justify-between p-8 w-[613px] h-[96px] bg-success-color rounded-md">
      <h3 className="text-brand-1 text-lg italic font-bold">{title}</h3>
      <div className="flex flex-row gap-4 items-center">
        <p className="text-brand-2 text-xl font-bold">{value}</p>
        <BsCheckLg className=" fill-brand-1 w-[2.5rem] h-[2.5rem]" />
      </div>
    </div>
  );
};

const ConfirmedCardContainer = ({ card, date }: TConfirmedCardContainer) => {
  return (
    <div className="flex flex-row justify-between p-8 w-[613px] h-[96px] bg-success-color rounded-md items-center">
      <div className="flex flex-row gap-4 items-center">
        <BsCreditCardFill className="fill-brand-2 w-[2.5rem] h-[2.5rem] " />
        <p className=" text-grey-0 text-xl font-bold italic">{card}</p>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h3 className=" text-slate-800 text-xl font-bold">VISA</h3>
        <p className=" text-grey-0 text-xl font-bold italic">{date}</p>
      </div>
      <BsCheckLg className=" fill-brand-1 w-[2.5rem] h-[2.5rem]" />
    </div>
  );
};

export { ConfirmedValueContainer, ConfirmedCardContainer };

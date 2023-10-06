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
    <div className="flex flex-row justify-between p-8 w-[613px] h-[96px]">
      <h3>{title}</h3>
      <div className="flex flex-row gap-4">
        <p>{value}</p>
        <BsCheckLg />
      </div>
    </div>
  );
};

const ConfirmedCardContainer = ({ card, date }: TConfirmedCardContainer) => {
  return (
    <div className="flex flex-row justify-between p-8 w-[613px] h-[96px]">
      <div className="flex flex-row gap-4">
        <BsCreditCardFill />
        <p>{card}</p>
      </div>
      <div className="flex flex-row gap-4">
        <h3>VISA</h3>
        <p>{date}</p>
      </div>
      <BsCheckLg />
    </div>
  );
};

export { ConfirmedValueContainer, ConfirmedCardContainer };

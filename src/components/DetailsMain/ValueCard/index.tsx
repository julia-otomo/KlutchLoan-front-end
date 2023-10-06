type TValueCard = {
  title: string;
  value: number;
};

const ValueCard = ({ title, value }: TValueCard) => {
  return (
    <div className="w-[278px] h-[284px] bg-text-1 rounded-md flex flex-col items-center py-8 gap-10 bg-grey-1">
      <p className="text-grey-0 text-2xl">{title}</p>
      <h3 className=" text-money-color text-3xl font-bold">{`R$ ${value.toFixed(
        2
      )}`}</h3>
    </div>
  );
};

export default ValueCard;

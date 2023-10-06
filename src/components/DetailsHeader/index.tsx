type TDetailsHeader = {
  title: string;
  value: string;
};

const DetailsHeader = ({ title, value }: TDetailsHeader) => {
  return (
    <div className="flex flex-row w-[586px] h-[79px] rounded-md bg-grey-1 items-center gap-4 px-8">
      <p className="text-xl text-grey-0">{title}</p>
      <h3 className="text-xl text-brand-1 font-bold">{value}</h3>
    </div>
  );
};

export default DetailsHeader;

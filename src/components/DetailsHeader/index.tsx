type TDetailsHeader = {
  title: string;
  value: string;
};

const DetailsHeader = ({ title, value }: TDetailsHeader) => {
  return (
    <div className="flex flex-row">
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
};

export default DetailsHeader;

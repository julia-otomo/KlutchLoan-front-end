type PreSolicitationValueContainerProps = {
  title: string;
  value: number;
};

const PreSolicitationValueContainer = ({
  title,
  value,
}: PreSolicitationValueContainerProps) => {
  return (
    <div className="w-[600px] h-[97px] rounded-md flex items-center px-4 bg-success-color justify-between">
      <h2 className="text-brand-1 text-xl font-bold italic">{title}</h2>
      <div className="h-[70%] w-[296px] rounded-md bg-white flex items-center px-4">
        <p className="text-brand-2 text-xl font-bold">{`R$ ${value.toFixed(
          2
        )}`}</p>
      </div>
    </div>
  );
};

export default PreSolicitationValueContainer;

type PreSolicitationValueContainerProps = {
  title: string;
  value: number;
};

const PreSolicitationValueContainer = ({
  title,
  value,
}: PreSolicitationValueContainerProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>{`R$${value.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default PreSolicitationValueContainer;

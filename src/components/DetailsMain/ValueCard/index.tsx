type TValueCard = {
  title: string;
  value: number;
};

const ValueCard = ({ title, value }: TValueCard) => {
  return (
    <div>
      <p>{title}</p>
      <h3>{`R$ ${value.toFixed(2)}`}</h3>
    </div>
  );
};

export default ValueCard;

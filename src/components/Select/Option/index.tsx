type TOptionProps = {
  title: string;
  value: string;
};

const Option = ({ title, value }: TOptionProps) => {
  return <option value={value}>{title}</option>;
};

export default Option;

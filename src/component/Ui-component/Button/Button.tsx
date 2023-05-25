import toasterModule from "../../../styles/toaster.module.css";

type ButtonProps = {
  text: string;
  onClick: Function;
  Class?: string;
};

const Button = ({ text, onClick, Class }: ButtonProps) => {
  return (
    <button className={Class} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default Button;

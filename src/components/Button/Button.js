import style from "./Button.module.scss";

const Button = ({ type, title }) => {
  return <button className={`${style.btn} ${type}`}>{title}</button>;
};

export default Button;

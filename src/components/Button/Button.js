import style from "./Button.module.scss";

const Button = ({ type, title, otherClassName = "" }) => {
  return <button className={`${style.btn} ${type} ${style[otherClassName]}`}>{title}</button>;
};

export default Button;

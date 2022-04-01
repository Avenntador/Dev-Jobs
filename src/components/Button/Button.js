import style from "./Button.module.scss";

const Button = ({ type, title, otherClassName = "", clickHandler }) => {
  return <button onClick={clickHandler} className={`${style.btn} ${type} ${style[otherClassName]}`}>{title}</button>;
};

export default Button;

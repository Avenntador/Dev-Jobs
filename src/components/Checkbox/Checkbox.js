import style from "./Checkbox.module.scss";
import Image from "next/image";
import checkMark from "/public/assets/desktop/icon-check.svg";

const Checkbox = ({ checkboxLabel }) => {
  return (
    <div className={style.checkboxWrapper}>
      <label className={`${style.label} checkbox-label`} htmlFor="scales">
        <input
          className={`${style.checkbox} checkbox`}
          type="checkbox"
          id="scales"
          name="scales"
        />
        <div className={style.checkIcon}>
          <Image src={checkMark} />
        </div>
        {checkboxLabel}
      </label>
    </div>
  );
};

export default Checkbox;

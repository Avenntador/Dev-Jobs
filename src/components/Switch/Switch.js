import style from "./Switch.module.scss";
import { useState, useEffect, useContext } from "react";
import { getFromLS } from "../../utils/localStorage";
import sunIcon from "/public/assets/desktop/icon-sun.svg";
import moonIcon from "/public/assets/desktop/icon-moon.svg";
import Image from "next/image";
import { ThemeContext } from "../../themes/themeContext";

const Switch = () => {
  const [active, setActive] = useState(false);
  const switchTheme = useContext(ThemeContext);

  useEffect(() => {
    const localTheme = getFromLS("theme");
    if (localTheme) {
      localTheme.name === "Light" ? setActive(false) : setActive(true);
    }
  }, []);

  const clickHandler = () => {
    setActive(!active);
    switchTheme();
  };

  return (
    <div className={`${style.switchButton} switchButton`}>
      <div className={style.sunIcon}>
        <Image src={sunIcon} />
      </div>
      <div
        onClick={clickHandler}
        className={`${style.switchButton__toggle} ${
          active ? style.active : ""
        }`}
      ></div>
      <div className={style.moonIcon}>
        <Image src={moonIcon} />
      </div>
    </div>
  );
};

export default Switch;

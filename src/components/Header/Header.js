import style from "./Header.module.scss";
import Switch from "../Switch";
import Image from "next/image";
import appLogo from "/public/assets/desktop/logo.svg";

const Navbar = ({ children }) => {
  return (
    <header className={style.header}>
      <div className={style.logoBox}>
        <Image src={appLogo} />
        <div className={style.switchWrap}>
          <Switch />
        </div>
      </div>
      {children}
    </header>
  );
};

export default Navbar;

import style from "./Card.module.scss";
import Image from "next/image";
import cardLogo from "/public/assets/logos/scoot.svg";

const Card = () => {
  return (
    <div className={`${style.card} card`}>
      <div className={style.card__logoWrapper}>
        <div className={style.card__logo}>
          <Image src={cardLogo} layout="fixed" />
        </div>
      </div>
      <div className={style.card__content}>
        <div className={style.card__date}>5h ago &#8226; Full Time</div>
        <h3 className="heading-three cardPosition">Senior Application Engineer</h3>
        <div className={style.card__company}>Scoot</div>
        <div className={`${style.card__location} location-label`}>United Kingdom</div>
      </div>
    </div>
  );
};

export default Card;

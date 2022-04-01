import style from "./Card.module.scss";

const Card = ({
  id,
  postedAt,
  contract,
  position,
  company,
  location,
  logo,
  logoBackground,
}) => {
  return (
    <div className={`${style.card} card`}>
      <div
        className={style.card__logoWrapper}
        style={{ backgroundColor: logoBackground }}
      >
        <img src={`${logo}`} alt="12" />
      </div>
      <div className={style.card__content}>
        <div className={style.card__date}>
          {postedAt} &#8226; {contract}
        </div>
        <h3 className="heading-three cardPosition">{position}</h3>
        <div className={style.card__company}>{company}</div>
        <div className={`${style.card__location} location-label`}>
          {location}
        </div>
      </div>
    </div>
  );
};

export default Card;

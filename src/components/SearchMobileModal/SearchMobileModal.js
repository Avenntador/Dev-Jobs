import style from "./SearchMobileModal.module.scss";
import SearchForm from "../SearchForm";
import Checkbox from "../Checkbox";
import Button from "../Button";

const SearchMobileModal = ({ setIsScrollBlocked, setIsModalOpen }) => {
  const closeHandler = (e) => {
    if (e.target.classList.contains(style.modal)) {
      setIsModalOpen(false);
      setIsScrollBlocked(false);
    }
  };

  return (
    <div className={style.modal} onClick={closeHandler}>
      <div className={`${style.modal__window} modal`}>
        <div className={style.filterTitle}>
          <SearchForm
            logo="/assets/desktop/icon-location.svg"
            placeholder="Filter by location…"
          />
        </div>
        <div className={style.hr} />
        <div className={`${style.checkbox} modalLabel`}>
          <Checkbox checkboxLabel={"Full Time Only"} />
        </div>
        <div>
          <Button
            type={"buttonPrimary"}
            title="Search"
            otherClassName="mobileBtn"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMobileModal;

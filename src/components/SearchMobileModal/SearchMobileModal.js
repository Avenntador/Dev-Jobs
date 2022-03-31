import style from "./SearchMobileModal.module.scss";
import SearchForm from "../SearchForm";
import Checkbox from "../Checkbox";
import Button from "../Button";
import searchLogo from "/public/assets/desktop/icon-search.svg";

const SearchMobileModal = ({ setIsModalOpen }) => {
  const closeHandler = (e) => {
    if (e.target.classList.contains(style.modal)) setIsModalOpen(false);
  };

  return (
    <div className={style.modal} onClick={closeHandler}>
      <div className={style.modal__window}>
        <div className={style.filterTitle}>
          <SearchForm logo={searchLogo} placeholder="Filter by location…" />
        </div>
        <div className={style.hr} />
        <div className={style.checkbox}>
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

import style from "./SearchFormMobile.module.scss";
import filterLogo from "/public/assets/mobile/icon-filter.svg";
import searchLogo from "/public/assets/desktop/icon-search.svg";
import Image from "next/image";

const SearchFormMobile = ({isModalOpen, setIsModalOpen }) => {
  return (
    <div className={style.searchWrapper}>
      <input
        type="text"
        className={`${style.searchForm} searchForm`}
        placeholder="Filter by title..."
      />
      <div className={style.icon_wrapper}>
        <div className={style.icon_search}>
          <Image src={searchLogo} alt="search-logo" />
        </div>
      </div>
      <div
        className={style.icon_filter}
        onClick={() => {
          setIsModalOpen(true);
          console.log(isModalOpen);
        }}
      >
        <Image src={filterLogo} alt="search-logo" />
      </div>
    </div>
  );
};

export default SearchFormMobile;

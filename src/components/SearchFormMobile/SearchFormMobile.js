import style from "./SearchFormMobile.module.scss";

const SearchFormMobile = ({ setIsScrollBlocked, setIsModalOpen }) => {
  return (
    <div className={style.searchWrapper}>
      <input
        type="text"
        className={`${style.searchForm} searchForm`}
        placeholder="Filter by title..."
      />
      <div className={style.icon_wrapper}>
        <div className={style.icon_search}>
          <img src="/assets/desktop/icon-search.svg" alt="" />
        </div>
      </div>
      <div
        className={style.icon_filter}
        onClick={() => {
          setIsModalOpen(true);
          setIsScrollBlocked(true);
        }}
      >
        <img src="/assets/mobile/icon-filter.svg" alt="" />
      </div>
    </div>
  );
};

export default SearchFormMobile;

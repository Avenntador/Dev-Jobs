import style from "./SearchForm.module.scss";

const SearchForm = ({ logo = null, placeholder = "" }) => {
  return (
    <div className={style.searchWrapper}>
      <input
        type="text"
        className={`${style.searchForm} searchForm`}
        placeholder={placeholder}
      />
      {logo && (
        <div className={style.icon}>
          <img src={`${logo}`} alt="" />
        </div>
      )}
    </div>
  );
};

export default SearchForm;

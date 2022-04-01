import style from "./SearchForm.module.scss";
import Image from "next/image";

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
          
          <Image src={logo} alt="search-logo" />
        </div>
      )}
    </div>
  );
};

export default SearchForm;

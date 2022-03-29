import style from "./SearchPanel.module.scss";
import SearchForm from "../SearchForm";
import Checkbox from "../Checkbox";
import Button from "../Button";
import searchIcon from "/public/assets/desktop/icon-search.svg";
import locationIcon from "/public/assets/desktop/icon-location.svg";

const SearchPanel = () => {
  return (
    <div className={`${style.searchWrapper} searchWrapper`}>
      <div className={style.filterByTitle}>
        <SearchForm placeholder="Filter by title, companies, expertise…" logo={searchIcon}/>
      </div>
      <div className={style.filterByLocation}>
        <SearchForm placeholder="Filter by location…" logo={locationIcon}/>
      </div>
      <div className={style.searchButton}>
        <Checkbox />
        <Button type="buttonPrimary" title="Search" />
      </div>
    </div>
  );
};

export default SearchPanel;

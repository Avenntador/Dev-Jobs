import style from "./SearchPanel.module.scss";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm";
import SearchFormMobile from "../SearchFormMobile";
import Checkbox from "../Checkbox";
import Button from "../Button";
import searchIcon from "/public/assets/desktop/icon-search.svg";
import locationIcon from "/public/assets/desktop/icon-location.svg";
import useWindowDimensions from "../../utils/useWindowDimensions";

const SearchPanel = () => {
  const { width } = useWindowDimensions();
  const [placeholders, setPlaceholders] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const bigScreenPlaceholders = {
    titlePlaceholder: "Filter by title, companies, expertise…",
    locationPlaceholder: "Filter by location…",
    checkboxLabel: "Full Time Only",
  };

  const lessScreenPlaceholders = {
    titlePlaceholder: "Filter by title",
    locationPlaceholder: "Filter by location",
    checkboxLabel: "Full Time",
  };

  useEffect(() => {
    if (width <= 900) {
      setPlaceholders(lessScreenPlaceholders);
    } else {
      setPlaceholders(bigScreenPlaceholders);
    }

    width <= 600 ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <div className={`${style.searchWrapper} searchWrapper`}>
      {isMobile ? (
        <SearchFormMobile  />
      ) : (
        <>
          <div className={style.filterByTitle}>
            <SearchForm
              placeholder={placeholders.titlePlaceholder}
              logo={searchIcon}
            />
          </div>
          <div className={style.filterByLocation}>
            <SearchForm
              placeholder={placeholders.locationPlaceholder}
              logo={locationIcon}
            />
          </div>
          <div className={style.searchButton}>
            <Checkbox checkboxLabel={placeholders.checkboxLabel} />
            <Button type="buttonPrimary" title="Search" />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPanel;

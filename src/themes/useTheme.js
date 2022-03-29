import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../utils/localStorage";
import * as allTheme from "./theme.json";

export const useTheme = () => {
  const { dark, light } = JSON.parse(JSON.stringify(allTheme)).data;
  const [theme, setTheme] = useState(null);

  const setMode = (mode) => {
    setToLS("theme", mode);
    setTheme(mode);
  };

  const switchTheme = () => {
    theme.id === dark.id ? setMode(light) : setMode(dark);
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(light);
    setMode(localTheme ? localTheme : light);
  }, []);

  return { theme, switchTheme };
};

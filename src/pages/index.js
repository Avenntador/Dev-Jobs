import style from "./index.module.scss";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { getAllDevs } from "../services/api";

export default function Home() {
  const [devs, setDevs] = useState(null);
  const [currentCardsOnScreen, setCurrentCardsOnScreen] = useState(6);

  useEffect(() => {
    let _isMounted = true;
    getAllDevs().then((response) => {
      if (_isMounted) {
        setDevs(response.data);
      }
    });

    return () => (_isMounted = false);
  }, []);

  const loadCardsHandler = () => {
    if (currentCardsOnScreen < devs.length) {
      setCurrentCardsOnScreen(currentCardsOnScreen + 3);
    }
    if (currentCardsOnScreen > devs.length)
      setCurrentCardsOnScreen(devs.length);
  };

  return (
    <MainLayout title={"Home"}>
      <div className={style.cardsContainer}>
        {devs &&
          devs.map((dev, idx) => {
            if (idx <= currentCardsOnScreen)
              return (
                <Card
                  key={dev.id}
                  id={dev.id}
                  postedAt={dev.postedAt}
                  contract={dev.contract}
                  position={dev.position}
                  company={dev.company}
                  location={dev.location}
                  logo={dev.logo}
                  logoBackground={dev.logoBackground}
                />
              );
          })}
      </div>
      {devs && (
        <div
          className={style.loaderBtn}
          style={{
            display: `${currentCardsOnScreen === devs.length ? "none" : ""}`,
          }}
        >
          <Button
            type="buttonPrimary"
            title="Load more"
            otherClassName={"defaultBtn"}
            clickHandler={loadCardsHandler}
          />
        </div>
      )}
    </MainLayout>
  );
}

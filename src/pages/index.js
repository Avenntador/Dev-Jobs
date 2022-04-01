import style from "./index.module.scss";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { getAllDevs, getDevById } from "../services/api";

export default function Home() {
  const [devs, setDevs] = useState(null);

  useEffect(() => {
    let _isMounted = true;
    getAllDevs().then((response) => {
      if (_isMounted) {
        setDevs(response.data);
      }
    });

    return () => (_isMounted = false);
  }, []);

  return (
    <MainLayout title={"Home"}>
      <div className={style.cardsContainer}>
        {devs &&
          devs.map((dev) => {
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
      <div className={style.loaderBtn}>
        <Button
          type="buttonPrimary"
          title="Load more"
          otherClassName={"defaultBtn"}
        />
      </div>
    </MainLayout>
  );
}

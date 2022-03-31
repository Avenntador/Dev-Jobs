import style from "./index.module.scss";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  return (
    <MainLayout title={"Home"}>
      <div className={style.cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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

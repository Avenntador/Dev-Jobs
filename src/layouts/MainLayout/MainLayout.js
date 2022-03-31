import style from "./MainLayout.module.scss";
import Header from "../../components/Header";
import SearchPanel from "../../components/SearchPanel";
import Head from "next/head";

const MainLayout = ({ title, children }) => {
  return (
    <div className={style.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={style.mainWrapper}>
        <SearchPanel />
        {children}
      </main>
      <div id="search-portal" />
    </div>
  );
};

export default MainLayout;

import style from "./DetailLayout.module.scss";
import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";

const DetailLayout = ({ title, children }) => {
  return (
    <div className={style.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={style.mainWrapper}>
        {children}
      </main>
      <footer className={`${style.footer} footer`}>
        <div className={style.footer__content}>
          <div className={style.footer__position}>
            <h3 className="heading-three footerLabel">
              Senior Software Engineer
            </h3>
            <p className="paragraph">So Digital Inc.</p>
          </div>
          <Button type="buttonPrimary" title="Apply Now" />
        </div>
      </footer>
    </div>
  );
};

export default DetailLayout;

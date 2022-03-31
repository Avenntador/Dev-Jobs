import style from "./SearchMobileModal.module.scss";

const SearchMobileModal = ({ setIsModalOpen }) => {
  const closeHandler = (e) => {
    if (e.target.classList.contains(style.modal)) setIsModalOpen(false);
  };

  return (
    <div className={style.modal} onClick={closeHandler}>
      <div className={style.modal__window}>adasdasdasdasd</div>
    </div>
  );
};

export default SearchMobileModal;

import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import Button from "../../components/Button/Button";

export function ErrorPage() {
  const navigate = useNavigate();

  const goMenu = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles["error-page"]}>
        <div>
          <span>Запрашиваемая страница не найдена (код ошибки 404)</span>
        </div>
        <Button onClick={goMenu}>Вернуться в главное меню</Button>
      </div>
    </>
  );
}

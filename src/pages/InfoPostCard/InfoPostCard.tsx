import { useNavigate, useParams } from "react-router-dom";
import { postApi } from "../../redux/PostsApi";

import styles from "./InfoPostCard.module.css";
import Button from "../../components/Button/Button";

export function InfoPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const goBack = () => {
    navigate(-1);
  };
  const { data, isLoading } = postApi.useFetchPostByIdQuery(Number(id));

  const post = data;

  if (isLoading) {
    return <p>Идет загрузка</p>;
  }

  if (!post) {
    return <p>Ошибка данных</p>;
  }

  return (
    <>
      <div className={styles["post"]}>
        <div className={styles["layoutpost"]}>
          <div className={styles["info"]}>
            <p className={styles["text-posts"]}>№</p>&nbsp;
            <div className={styles["userId"]}>{post.id}</div>
          </div>
          <div className={styles["info"]}>
            <p className={styles["text-posts"]}>Заголовок:</p>&nbsp;
            <span className={styles["title"]}>{post.title}</span>
          </div>
          <div className={styles["info"]}>
            <p className={styles["text-posts"]}>Описание:</p>&nbsp;
            <span className={styles["description"]}>{post.body}</span>
          </div>
        </div>
        <Button appearence="big" onClick={goBack}>
          Назад
        </Button>
      </div>
    </>
  );
}

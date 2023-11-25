import { useNavigate } from "react-router-dom";
import styles from "./PostsCard.module.css";
import { PostsCardProps } from "./PostsCard.props";
import Button from "../Button/Button";

export function PostsCard(props: PostsCardProps) {
  const navigate = useNavigate();

  const cardInfo = () => {
    navigate(`/posts/${props.id}`);
  };
  return (
    <div className={styles["link"]}>
      <div className={styles["info"]}>
        <p className={styles["text-posts"]}>№</p>&nbsp;
        <div className={styles["userId"]}>{props.userId}</div>
      </div>
      <div className={styles["info"]}>
        <p className={styles["text-posts"]}>Заголовок:</p>&nbsp;
        <span className={styles["title"]}>{props.title}</span>
      </div>
      <div className={styles["info"]}>
        <p className={styles["text-posts"]}>Описание:</p>&nbsp;
        <span className={styles["description"]}>{props.body}</span>
      </div>
      <Button onClick={cardInfo}>Подробнее</Button>
    </div>
  );
}

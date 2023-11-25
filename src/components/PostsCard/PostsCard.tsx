import { Link } from "react-router-dom";
import styles from "./PostsCard.module.css";
import { PostsCardProps } from "./PostsCard.props";

export function PostsCard(props: PostsCardProps) {
  return (
    <>
      <Link to={`/posts/${props.id}`} className={styles["link"]}>
        <div>
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
            <span className={styles["description"]}>{props.description}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

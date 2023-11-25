import { PostsCard } from "../../../components/PostsCard/PostsCard";
import styles from "./MenuList.module.css";
import { MenuListProps } from "./MenuList.props";

export const MenuList = ({ posts }: MenuListProps) => {
  return (
    <div className={styles.wrapper}>
      {posts.map((p) => (
        <PostsCard
          key={p.id}
          id={p.id}
          userId={p.id}
          title={p.title}
          body={p.body}
        />
      ))}
    </div>
  );
};

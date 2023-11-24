import { Link } from "react-router-dom";
// import styles from "./PostsCard.module.css";
import { PostsCardProps } from "./PostsCard.props";

// userId: number;
// id: number;
// title: string;
// body: string;

export function PostsCard(props: PostsCardProps) {
  return (
    <>
      <Link to={`/posts/${props.id}`}>
        <div>
          <div>{props.id}</div>
          <div>{props.userId}</div>
          <div>{props.title}</div>
          <div>{props.description}</div>
        </div>
      </Link>
    </>
  );
}

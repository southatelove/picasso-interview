// import styles from "./InfoTodo.module.css";

import { useParams } from "react-router-dom";

export function InfoPost() {
  const { id } = useParams();
  return <>Post - {id}</>;
}

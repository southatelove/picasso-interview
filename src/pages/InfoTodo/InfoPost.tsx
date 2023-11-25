// import styles from "./InfoTodo.module.css";

import { useNavigate, useParams } from "react-router-dom";

export function InfoPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      Post - {id}
      <button onClick={goBack}>Обратно </button>
    </>
  );
}

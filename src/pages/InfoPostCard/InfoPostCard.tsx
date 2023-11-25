import { useNavigate, useParams } from "react-router-dom";

export function InfoPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <p>Информция о заметке</p>
        <div>{id}</div>
        <button onClick={goBack}>Обратно </button>
      </div>
    </>
  );
}

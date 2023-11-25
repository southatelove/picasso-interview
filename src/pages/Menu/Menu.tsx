import { MenuList } from "./MenuList/MenuList";
import { postApi } from "../../redux/PostsApi";

export function Menu() {
  const {
    data: posts,
    error,
    isLoading,
  } = postApi.useFetchAllPostsQuery({ limit: 100, start: 0 });

  return (
    <>
      <div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла Ошибка.... </h1>}
        {posts && <MenuList posts={posts}></MenuList>}
      </div>
    </>
  );
}

import { MenuList } from "./MenuList/MenuList";
import { postApi } from "../../redux/PostsApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setPage } from "../../redux/store";

export const Menu = () => {
  const page = useSelector((state: RootState) => state.loadpage);

  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, error } = postApi.useGetPostsQuery({
    limit: 10,
    page: page.page,
  });
  const posts = data ?? [];

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY > document.body.offsetHeight - 1.5;

      console.log(
        window.innerHeight + window.scrollY,
        document.body.offsetHeight
      );

      if (scrolledToBottom && !isLoading) {
        dispatch(setPage());
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isLoading, dispatch]);

  return (
    <>
      <div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла Ошибка.... </h1>}
        {posts && <MenuList posts={posts}></MenuList>}
      </div>
    </>
  );
};

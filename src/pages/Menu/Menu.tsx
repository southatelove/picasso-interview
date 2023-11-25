import { MenuList } from "./MenuList/MenuList";
import { postApi } from "../../redux/PostsApi";
import { useEffect, useState } from "react";

export const Menu = () => {
  const [page, setPage] = useState(1);
  const props = postApi.useGetPostsQuery({
    limit: 10,
    page,
  });

  const posts = props.data ?? [];

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY + 1.5 >= document.body.offsetHeight;

      if (scrolledToBottom && !props.isLoading) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, props.isLoading]);

  return (
    <>
      <div>
        {props.isLoading && <h1>Идет загрузка...</h1>}
        {props.error && <h1>Произошла Ошибка.... </h1>}
        {posts && <MenuList posts={posts}></MenuList>}
      </div>
    </>
  );
};

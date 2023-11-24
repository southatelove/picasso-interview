import { useEffect, useState } from "react";

import axios from "axios";
import { PREFIX } from "../../helpers/API";
import { Posts } from "../../interfaces/posts.interface";
import { MenuList } from "./MenuList/MenuList";

export function Menu() {
  const [posts, setPosts] = useState<Posts[]>([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get<Posts[]>(`${PREFIX}/posts`);
      setPosts(data);
    } catch (e) {
      console.error(e);
    }
    return;
  };

  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);

  return (
    <>
      <div>
        <MenuList posts={posts}></MenuList>
      </div>
    </>
  );
}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Posts } from "../interfaces/posts.interface";

export const postApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<Posts[], { limit: number; start: number }>({
      query: ({ limit = 5, start = 0 }) => ({
        url: "/posts",
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    fetchPostById: build.query<Posts, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

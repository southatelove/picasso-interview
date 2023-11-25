import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import { Posts } from "../interfaces/posts.interface";

export const postApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ page, limit }) => `posts?_limit=${limit}&_page=${page}`,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },

      forceRefetch({ currentArg, previousArg }) {
        console.log(currentArg?.page);
        console.log(previousArg?.page);
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

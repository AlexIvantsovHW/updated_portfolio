import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GRAPHQL_URL } from "../../../app/api";
import { getAllProjects } from "./requests";

export const projectApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: GRAPHQL_URL,
  }),
  reducerPath: "projectApi",
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: ({ limit }) => ({
        document: getAllProjects,
        variables: {
          limit,
        },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectApi;

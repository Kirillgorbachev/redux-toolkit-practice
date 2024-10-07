import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userAPI = createApi({
    reducerPath: "user_api",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (build) => ({
        fetchAllUsers: build.query({
            query: (limit = 5) => ({
                url: "/users",
                params: {
                    _limit: limit
                }
            })
        })
    })
})
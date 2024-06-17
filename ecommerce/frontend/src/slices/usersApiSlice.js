import { USERS_URL } from "../constants";
import { apiSlice } from "./appSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
            keepUnusedDataFor: 5,
        }),
        logout: builder.mutation({
            query: data => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
        register: builder.mutation({
            query: data => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            })
        }),
        profile: builder.mutation({
            query: data => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useProfileMutation
} = usersApiSlice
import { setAccessToken } from "@/lib/accessToken"
import { useQuery } from "react-query"
import { authApi } from "./api"

export const useRefresh = () => {
    const {refreshToken} = authApi()

    // To silently refresh the token
    return useQuery("refresh", refreshToken, {
        refetchOnWindowFocus: false,
        retry: 1,
        refetchInterval: 5000,
        onSuccess: data => {

            // set the access token return by the api
            setAccessToken(data.accessToken)
        }
    })
}
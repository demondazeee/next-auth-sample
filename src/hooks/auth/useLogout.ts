import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { authApi } from "./api"


export const useLogout = () => {
    const {logoutUser} = authApi()


    return useMutation(logoutUser, {
        onSuccess: data => {
        },
        onError: (error) => {
            if(error instanceof Error) {
               console.log(error.message)
            }
        },
    })
}

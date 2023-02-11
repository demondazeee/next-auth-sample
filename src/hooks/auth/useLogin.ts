import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { authApi } from "./api"


export const useLogin = () => {
    const {loginUser} = authApi()


    return useMutation(loginUser, {
        onSuccess: data => {
        },
        onError: (error) => {
            if(error instanceof Error) {
               console.log(error.message)
            }
        },
    })
}

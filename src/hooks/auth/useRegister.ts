import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { authApi } from "./api"


export const useRegister = () => {
    const {registerUser} = authApi()


    return useMutation(registerUser, {
        onSuccess: data => {
        },
        onError: (error) => {
            if(error instanceof Error) {
               console.log(error.message)
            }
        },
    })
}

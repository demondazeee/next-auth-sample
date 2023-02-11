'use client'

import { useLogout } from "@/hooks/auth/useLogout"
import { useRouter } from "next/router"


export type TestProp = {
    username: string,
    className?: string
}


const Profile = ({username}: TestProp) => {
    const {mutate, isLoading, isSuccess} = useLogout()
    const router = useRouter()
    if(isSuccess) {
        router.push('/')
    }

    return (
        <>
            <p>Hi, {username} </p>
            <button className="outline-none border border-black p-2" onClick={() => {mutate()}}>{isLoading ? "Loading" : "Logout"}</button>
        </>
    )
}

export default Profile
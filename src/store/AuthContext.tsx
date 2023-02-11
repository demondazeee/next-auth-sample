import { useRefresh } from "@/hooks/auth/useRefresh"
import { createContext, ReactNode } from "react"

const authContext = createContext(null)

type AuthContextProp = {
    children: ReactNode
}

const AuthContext = ({children}: AuthContextProp) => {
    
    // To silently refresh the token
    useRefresh()

    return (
        <>
            {children}
        </>
    )
}

export default AuthContext
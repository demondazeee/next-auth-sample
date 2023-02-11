import { setAccessToken } from "@/lib/accessToken"
import { isUser, LoginInput, RegisterInput } from "@/types/Auth"

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export const authApi = () => {

    const loginUser = async (loginInput: LoginInput) => {
        const res = await fetch(`${SERVER_URL}/auth/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({...loginInput}),
            credentials: 'include' 
        })

        if(!res.ok) {
            throw new Error('error')
        }

        const data: unknown = await res.json()
        if(!isUser(data)) {
            throw new Error('hehe')
        }
        return data
    }

    const registerUser = async (registerInput: RegisterInput) => {
        const res = await fetch(`${SERVER_URL}/auth/register`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({...registerInput}),
            credentials: 'include' 
        })

        if(!res.ok) {
            throw new Error('error')
        }

        const data: unknown = await res.json()
        if(!isUser(data)) {
            throw new Error('hehe')
        }
        return data
    }

    const logoutUser = async () => {
        const res = await fetch(`${SERVER_URL}/auth/logout`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include' 
        })

        if(!res.ok) {
            throw new Error('error')
        }

        const data: unknown = await res.json()
        setAccessToken("")
        return data
    }

    const refreshToken = async () => {
        const res = await fetch(`${SERVER_URL}/auth/refresh`, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })

        const data: unknown = await res.json()
        if(!isUser(data)) {
            throw new Error('hehe')
        }
        return data
    }

    return {
        loginUser,
        refreshToken,
        logoutUser,
        registerUser
    }
}
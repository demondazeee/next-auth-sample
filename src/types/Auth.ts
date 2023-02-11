
export interface LoginInput {
    username: string,
    password: string
}

export interface RegisterInput extends LoginInput {
    
}

export interface UserInfo {
    accessToken: string,
    id: string,
    username: string
}

export const isUser = (data: unknown) : data is UserInfo => {
    if(data !== null && typeof data === "object") {
        return "accessToken" in data
    }
    return false
}
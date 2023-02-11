'use client';

import { useRegister } from "@/hooks/auth/useRegister";
import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";

const RegisterForm = () => {
    const {mutate, isLoading, isSuccess} = useRegister()
    const userRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({
            username: userRef.current?.value!,
            password: passRef.current?.value!
        })
    }

    if(isSuccess) {
        router.push('/profile')
    }

    return (
        <>
            <h2 className="text-2xl font-bold">Register a user</h2>
                <form className="flex flex-col gap-2" onSubmit={submitHandler} >
                    <input ref={userRef} placeholder="Username" className="outline-none border border-black p-2" />
                    <input ref={passRef}  placeholder="Password" type="password" className="outline-none border p-2 border-black" />
                    <button className="outline-none border border-black p-2">{isLoading ? "Loading" : "Login"}</button>
                </form>
        </>
    )
}

export default RegisterForm
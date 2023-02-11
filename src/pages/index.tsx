import LoginForm from "@/components/Auth/LoginForm"
import RegisterForm from "@/components/Auth/RegisterForm"
import { Layouts } from "@/layouts"
import { isUser } from "@/types/Auth"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { useState } from "react"


const HomePage = () => {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <Layouts>
      {isRegister ? <RegisterForm /> : <LoginForm />}
      <button className="outline-none border border-black p-2" onClick={() => {setIsRegister(prev => !prev)}}>test</button>
    </Layouts>
  )
}

// To check or verify if the user is logged in or not, if logged in.
// User will redirect to /profile
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {req} = context
  const token = req.cookies['rt']
  if(token)  {

    const res = await fetch('http://localhost:5231/auth/refresh', {
    headers: {
          'Content-Type': 'application/json',
          'Cookie': `rt=${token}`
        },
        credentials: 'include'
    })
  
  const data:unknown = await res.json();

  if(isUser(data)) {
      return {
        props: {},
        redirect: {
          destination: '/profile'
        }
      }
    }

  }
  
  return {
    props: {
      data: "hehe"
    }
  }
}

export default HomePage
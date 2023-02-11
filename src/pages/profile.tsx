import Profile from "@/components/Profile"
import withAuth from "@/hoc/withAuth"
import { Layouts } from "@/layouts"
import { getAccessToken } from "@/lib/accessToken"
import { UserInfo } from "@/types/Auth"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

type GSSPProps = {
  data: UserInfo
}

// the 'data' props was been passed down from the HOC to this component
const ProfilePage = ({data: {username}}: GSSPProps) => {

  return (
    <Layouts className="pt-[100px]">
      <Profile username={username} />
    </Layouts>
  )
}


// Using HOC below, to check if the user is authenticated, if not authenticated.
// The HOC will redirect the user to the index ('/') page
export const getServerSideProps: GetServerSideProps = withAuth(async (context: GetServerSidePropsContext) => {

  
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

  // With HOC that checks authentication, user can still write a GSSP below

  // This will take the access Token that was set on the HOC and use it here
  const token = getAccessToken()
  const res = await fetch(`${SERVER_URL}/test/user`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  })

  const data = await res.json()

    return {
      props: {
        
      }
    }
  }
)

export default ProfilePage
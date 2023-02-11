import { getAccessToken, setAccessToken } from "@/lib/accessToken";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";


const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

const withAuth = (gssp: GetServerSideProps) => {
    const newGssp: GetServerSideProps = async (context: GetServerSidePropsContext) => {
        const { req } = context;

        // check if token exists on the cookies
        const token = req.cookies['rt'];

        // if does not exist, redirect the user to the index page
        if(token == null) {
            return {
                props: {
                },
                redirect: {
                    destination: '/'
                }
            }
        }
        
        // fetch the refresh token in the server to get a new refresh token and access token
        const res = await fetch(`${SERVER_URL}/auth/refresh`, {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `rt=${token}`
            },
            credentials: 'include'
        })

        const data = await res.json();

        // set the access token here to be used across the application
        // it is save as an in-memory
        setAccessToken(data.accessToken)


        const gsspData = await gssp(context)

        if(!("props" in gsspData)) {
            return {
                props: {
                },
                redirect: {
                    destination: '/'
                }
            }
        }

        return {
            props: {
                ...gsspData.props,
                data
            }
        }
    }
    return newGssp
}

export default withAuth
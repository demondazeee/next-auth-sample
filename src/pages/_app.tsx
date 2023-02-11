import AuthContext from '@/store/AuthContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <QueryClientProvider client={queryClient}>

        {/* // for silent refreshing of token */}
        <AuthContext>
          <Component {...pageProps} />
        </AuthContext>
      </QueryClientProvider>
    </>
  )
}

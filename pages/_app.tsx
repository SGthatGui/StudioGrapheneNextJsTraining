//section for util imports
import '../styles/globals.css'
import type { AppProps } from 'next/app'

//section for component imports

//section for FC
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

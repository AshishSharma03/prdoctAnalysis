import '../styles/globals.css'
import GenerateProvider from '../context/GenerateProvider'

function MyApp({ Component, pageProps }) {
  return(
    <>
     <GenerateProvider>
    <Component {...pageProps} />
     </GenerateProvider>
    </>
    )

}

export default MyApp

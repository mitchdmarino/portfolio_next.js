import '../styles/globals.css'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      {/* footer goes here */}
    </>
  )
}

export default MyApp

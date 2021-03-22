import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <header>{Component.headerTitle}</header>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

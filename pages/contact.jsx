import Head from "next/head"
import { Footer, Navbar } from "../components"

const contact = () => {
  return (
    <div>
        <Head>
            <title>Contactame</title>
        </Head>
        <Navbar />
        <h1>Contact</h1>
        {/* <Footer /> */}
    </div>
  )
}

export default contact
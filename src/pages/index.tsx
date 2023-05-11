import Main from "@/components/Main/Main"
import Guns from "@/components/Guns/Guns"
import Biography from "@/components/Biography/Biography"
import Platforms from "@/components/Platforms/Platforms"
import Head from "next/head"

const Home = () => {
    return (
        <>
            <Head>
                <title>AFTER 2033 — Home</title>
            </Head>
            <Main />
            <Guns />
            <Biography />
            <Platforms />
        </>
    )
}

export default Home
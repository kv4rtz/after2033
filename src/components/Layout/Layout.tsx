import { ReactNode } from "react"
import NavBar from "@/components/NavBar/NavBar"
import Footer from "@/components/Footer/Footer"

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
import Header from "../components/sections/Header"

export default function Layout({ children }) {
    return (
        <>
        <Header/>
        <main>{children}</main>
        </>
    )
  }
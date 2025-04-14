import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Header />
            {/* The <Outlet> renders the current route selected. */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
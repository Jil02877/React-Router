import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
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
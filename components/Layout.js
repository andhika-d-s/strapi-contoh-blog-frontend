import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container-xl mx-auto">
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
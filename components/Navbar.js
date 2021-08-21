import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, Close } from '@material-ui/icons'
import { motion } from 'framer-motion'


const ModalNavbar = () => {
 

    return (
        <motion.div
        initial={{
            opacity: 0,
            y: 20
        }}
        animate={{
            opacity: 1,
            y: 0
        }}

        transition={{
            type: 'spring',
            stiffness: 600,
            damping: 60
        }}
        className="container fixed md:hidden p-3 mt-20 rounded-md bg-white shadow-md">
            <div className="md:hidden flex flex-col text-gray-500">
                <Link href="/">
                    <a className="hover:text-gray-800 p-3">Home</a>
                </Link>
                <Link href="/About">
                    <a className="hover:text-gray-800 p-3">About</a>
                </Link>
                <Link href="/Blog">
                    <a className="hover:text-gray-800 p-3">Blog</a>
                </Link>
            </div>
        </motion.div>
    )
}

const Navbar = () => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className="relative z-30">
            <div className="fixed w-full py-5 px-10 flex flex-row justify-between shadow-md bg-white">
                <div className="font-bold">
                    <Link href="/">
                        <a className="text-lg">LogoHere</a>
                    </Link>
                </div>
                <div className="hidden md:flex md:flex-row justify-between text-lg font-bold text-gray-500">
                    <Link href="/">
                        <a className="hover:text-gray-900 transition-colors border-transparent border-b-4 hover:border-black text-center mx-4">Home</a>
                    </Link>
                    <Link href="/About">
                        <a className="hover:text-gray-900 transition-colors border-transparent border-b-4 hover:border-black text-center mx-4">About</a>
                    </Link>
                    <Link href="/Blog">
                        <a className="hover:text-gray-900 transition-colors border-transparent border-b-4 hover:border-black text-center mx-4">Blog</a>
                    </Link>
                </div>
                <div onClick={handleClick} className="md:hidden">
                    {!active ? <Menu fontSize="large" /> : <Close fontSize="large" /> }
                </div>
            </div>
            {
                active ?  <ModalNavbar /> : null
            }
        </div>
    )
}

export default Navbar
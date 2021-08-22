import React from 'react'
import Link from 'next/link'
import { GitHub, Facebook, Instagram } from '@material-ui/icons'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
        <br />
        <div>
            
        </div>
        <div className="flex flex-col p-8 text-white bg-gray-800 mb-0">
            <div className="grid md:grid-cols-3 gap-9 md:flex-row justify-evenly">
                <div className="p-2 text-justify">
                    <h1 className="text-3xl">BlogName</h1>
                    <br />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae velit quos, ipsum error quod, adipisci recusandae aspernatur ipsa doloremque modi quis a sequi vel reiciendis sed perferendis distinctio iusto!</p>
                </div>
                <div className="p-2">
                    <h1 className="text-3xl">Navigation</h1>
                    <br />
                    <div className="flex flex-col">
                        <Link href="/">
                            <a className="pl-4 p-1 hover:text-gray-300">Home</a>
                        </Link>
                        <Link href="/About">
                            <a className="pl-4 p-1 hover:text-gray-300">About</a>
                        </Link>
                        <Link href="/Blog">
                            <a className="pl-4 p-1 hover:text-gray-300">Blog</a>
                        </Link>
                    </div>
                </div>
                <div className="p-2">
                    <h1 className="text-3xl">Social Media</h1>
                    <br />
                    <div className="flex flex-col items-baseline">
                        <a className="hover:text-gray-300 p-1" href="https://github.com/andhika-d-s">
                            <GitHub fontSize='large' /> <span>Github</span> 
                        </a>
                        <a className="hover:text-gray-300 p-1" href="#">
                            <Facebook fontSize='large' /> <span>Facebook</span> 
                        </a>
                        <a className="hover:text-gray-300 p-1" href="#">
                            <Instagram fontSize='large' /> <span>Instagram</span> 
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center">Copyright {year}</div>
        </div>
        </>
    )
}

export default Footer

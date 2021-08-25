import React from 'react'
import Link from 'next/link'

const PrimaryButton = ({children, color, link}) => {
    return (
        <div className="py-5 ">
            <Link href={link}>
                <a className={`cursor-pointer text-xl font-bold transition-colors border-transparent ${color} border-b-4`}>
                    {children}
                </a>
            </Link>
        </div>
    )
}

export default PrimaryButton

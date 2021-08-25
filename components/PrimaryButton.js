import React from 'react'
import Link from 'next/link'

const PrimaryButton = ({children, color, link}) => {
    return (
        <Link href={link} className="py-5 text-xl">
            <a className={`font-bold transition-colors border-transparent ${color} border-b-4 px-1`}>
                {children}
            </a>
        </Link>
    )
}

export default PrimaryButton

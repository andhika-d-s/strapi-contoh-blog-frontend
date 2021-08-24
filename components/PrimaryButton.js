import React from 'react'

const PrimaryButton = ({children, color}) => {
    return (
        <a className={`my-5 text-xl font-bold transition-colors border-transparent ${color} border-b-4 px-1`}>
            {children}
        </a>
    )
}

export default PrimaryButton

import React from 'react'

const PrimaryButton = ({children, color}) => {
    return (
        <div className="py-5 text-xl">
            <button className={`font-bold transition-colors border-transparent ${color} border-b-4 px-1`}>
                {children}
            </button>
        </div>
    )
}

export default PrimaryButton

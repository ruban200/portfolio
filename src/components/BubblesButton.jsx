import React, { useState } from 'react'

const BubblesButton = ({ onClick, children, className, type = "button" }) => {
    const [animating, setAnimating] = useState(false)

    const handleClick = (e) => {
        if (!animating) {
            setAnimating(true)
            setTimeout(() => setAnimating(false), 700)
        }
        if (onClick) onClick(e)
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`bubbly-button ${animating ? 'animate' : ''} ${className}`}
        >
            {children}
        </button>
    )
}

export default BubblesButton

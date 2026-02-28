import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    // Default to dark mode based on the overall portfolio design
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        if (!isDark) {
            document.body.classList.add('light-mode')
        } else {
            document.body.classList.remove('light-mode')
        }
    }, [isDark])

    return (
        <div
            className={`candle-wrapper ${isDark ? '' : 'off'}`}
            onClick={() => setIsDark(!isDark)}
            title="Toggle Theme"
        >
            <div className="candle">
                <div className="candle-eyes">
                    <div className="candle-eye"></div>
                    <div className="candle-eye"></div>
                </div>
                <div className="candle-mouth"></div>
            </div>
            <div className="candle-wick"></div>
            <div className="candle-flame"></div>
        </div>
    )
}

export default ThemeToggle

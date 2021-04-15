import React from 'react'
import "./HeroSection.css"
import { Button } from "../ButtonElements"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Wonderful Indonesia</h1>
            <p>Plan Your Adventure Today</p>
            <div className="hero-btns">
                <Button fontLarge large btnColor>
                    Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection 
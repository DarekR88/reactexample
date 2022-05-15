import React from "react";
import './LandingScreen.css'


const landingScreen = props => {
    return (
        <div className="landingScreen" ref={props.landingRef}>
            <p className="content">Landing Screen</p>
        </div>
    );
};

export default landingScreen;
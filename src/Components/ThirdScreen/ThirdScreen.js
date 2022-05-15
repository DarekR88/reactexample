import React from "react";
import './ThirdScreen.css'


const ThirdScreen = props => {
    return (
        <div className="thirdScreen" ref={props.thirdRef}>
            <p className="content">Third Screen</p>
        </div>
    );
};

export default ThirdScreen;
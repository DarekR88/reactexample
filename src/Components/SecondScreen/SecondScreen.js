import React from "react";
import './SecondScreen.css'


const secondScreen = props => {

    return (
        <div className="secondScreen" ref={props.secondRef}>
            <p className="content">Second Screen</p>
        </div>
    );
};

export default secondScreen;
import React from "react";
// import { Link } from "react-router-dom"
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <button className="sideDrawerCloseButton" onClick={props.drawerClickHandler}>x</button>
        <ul>
            <li><p onClick={() => {
                props.drawerClickHandler();
                props.handleScroll((props.landingRef).current);
            }}>Home</p></li>
            <li><p onClick={() => {
                props.drawerClickHandler();
                props.handleScroll((props.secondRef).current);
            }}>About</p></li>
            <li><p onClick={() => {
                props.drawerClickHandler();
                props.handleScroll((props.thirdRef).current);
            }}>Misc</p></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;
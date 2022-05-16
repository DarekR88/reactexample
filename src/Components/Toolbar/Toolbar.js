import React from "react";
// import { Link } from "react-router-dom"
import './Toolbar.css';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><p onClick={() => {props.handleScroll((props.landingRef).current);}}>THE LOGO</p></div>
            <div className="spacer" />
            <div className="toolbar_nav-items">
                <ul>
                    <li><p onClick={() => {props.handleScroll((props.secondRef).current);}}>About</p></li>
                    <li><p onClick={() => {props.handleScroll((props.thirdRef).current);}}>Misc</p></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
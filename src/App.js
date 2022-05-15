import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Toolbar from './Components/Toolbar/Toolbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop';
import LandingScreen from './Components/LandingScreen/LandingScreen'
import SecondScreen from './Components/SecondScreen/SecondScreen';
import ThirdScreen from './Components/ThirdScreen/ThirdScreen';

const App = () => {

  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const landingRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const toggleDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  const backdropClickHnadler = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen)
  };

  let backdrop;

  if (isSideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHnadler}/>
  }


  return (
    <div style = {{ height: '100%'}} >
      <Toolbar drawerClickHandler={toggleDrawer} landingRef={landingRef} secondRef={secondRef} thirdRef={thirdRef} />
      <SideDrawer show={isSideDrawerOpen} drawerClickHandler={toggleDrawer} landingRef={landingRef} secondRef={secondRef} thirdRef={thirdRef} />
      {backdrop}
      <Router>
        <Routes>
          <Route exact path={['/', '/#about', '/#misc']}>
            <LandingScreen landingRef={landingRef} />
            <SecondScreen secondRef={secondRef} />
            <ThirdScreen thirdRef={thirdRef} />
          </Route>
        </Routes>
      </Router> 
    

      
    </div >
  );
}

export default App;
import React, { useState } from 'react';
import Toolbar from './Components/Toolbar/Toolbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop';
import LandingScreen from './Components/LandingScreen/LandingScreen'
import SecondScreen from './Components/SecondScreen/SecondScreen';
import ThirdScreen from './Components/ThirdScreen/ThirdScreen';

const App = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

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
      <Toolbar drawerClickHandler={toggleDrawer} />
      <SideDrawer show={isSideDrawerOpen} drawerClickHandler={toggleDrawer}/>
      {backdrop} 
      <LandingScreen />
      <SecondScreen />
      <ThirdScreen />

      
    </div >
  );
}

export default App;
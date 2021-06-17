import React, {useState} from 'react';
import Routes from './Routes';
import NavLinks from './NavLinks';
import {
   BrowserRouter as Router,
   Switch
 } from "react-router-dom";

 export const Navbar = () => {
   const [hamburgerClicked, setHamburgerClicked] = useState(false)

   const handleClick = () => {
      setHamburgerClicked(prevState => !prevState)
   }

   const desktopStyles = "text-center md:space-x-14 font-serif md:text-lg bg-blue-500 p-4 text-green-100 hidden sm:block"
   const mobileStyles = "flex flex-col items-center font-serif  space-y-10 text:lg h-screen bg-blue-500 text-green-100 p-4 sm:hidden"
   const desktopLinkStyles = "inline-block hover:bg-green-300 hover:bg-opacity-25 rounded-lg px-4 py-2"
   const mobileLinkStyles = "inline-block hover:bg-green-300 hover:bg-opacity-25 rounded-lg px-4 py-8"
   return (
      <Router>
         <button className="ham-wrapper ham-stack flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-6 sm:hidden" onClick={handleClick}>
            <div className="ham-inner">
               <span className="ham-bar" />
               <span className="ham-bar" />
               <span className="ham-bar" />
            </div>
         </button>
         <div className={`lg:flex ${  hamburgerClicked ? "block" : "hidden" } `}>
               <NavLinks styles={mobileStyles} linkStyles={mobileLinkStyles} />
         </div>
         <div>
            <NavLinks styles={desktopStyles} linkStyles={desktopLinkStyles} />
         </div>
         <Switch>
            <Routes />    
         </Switch>
      </Router>
    )
 } 
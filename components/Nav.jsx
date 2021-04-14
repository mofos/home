import React from "react";
import { render } from "react-dom";
import styles from '../styles/Layout.module.css'

const Nav = () => {
  const openNav = () => {
     
    document.getElementById("mySidenav").style.width = "250px";
   
     
  };

 
  const closeNav = () => {
    
      document.getElementById("mySidenav").style.width = "0px";
     
    
  };

  return (
    <div className={styles.Nav}>
      <h1>WAP</h1>
      <button className={styles.menu}onClick={openNav}>=</button>
      <div id="mySidenav" className={styles.sidenav}>
        <button className={styles.closebtn} onClick={closeNav} >
          &times;
        </button>
        <a href="/">Home</a>
        <a href="/attack">Attack</a>
        <a href="/">LinuxOnline</a>
        <a href="/about">About us</a>
      </div>
    </div>
    
  );
  
};



export default Nav;

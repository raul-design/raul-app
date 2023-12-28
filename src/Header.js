import { useState } from "react";

const headerStyle = {
  backgroundColor: "red",
  };
 
  const activeButtonStyle = {
    border: 0,
    color: "#fff",
    backgroundColor: "green",
    fontweight: "bold",
    };
  
    const defaultStyle = {
    backgroundColor: "red",
  }
  
function NavButton (prop){
    return (
      <button 
      style={prop.isButtonAcive ? activeButtonStyle : defaultStyle}
      onClick={prop.onClickButton} 
      name={prop.name}
      >
        {prop.name}
      </button>
    );
  }
      
  function Header(prop) {
    return (
    <div style={headerStyle}>
      <NavButton
      isButtonAcive= {prop.onClickButton === "home"}
      onClickButton={prop.onClickButton}
      name="home"
      />
      <NavButton isButtonAcive= {prop.onClickButton === "resume"}
      onClickButton={prop.onClickButton}
       name="resume"
        />
      <NavButton isButtonAcive= {prop.onClickButton === "gallery"} 
      onClickButton={prop.onClickButton} 
      name="gallery"
      />
      <NavButton isButtonAcive= {prop.onClickButton === "contact"} 
      onClickButton={prop.onClickButton} 
      name="contact"
      />
      <NavButton isButtonAcive= {prop.onClickButton === "locations"} 
      onClickButton={prop.onClickButton} 
      name="locations"
      />
      {/* 
      <button 
      style={
        prop.CurrentlyActiveButton ==='home' 
        ? ActiveButtonStyle 
        : null
      } 
      onClick={prop.onClickButton} 
      name="home"
      >
        Home
        </button>
      {/* <button 
      style={
        prop.CurrentlyActiveButton ==='resume'
       ? ActiveButtonStyle 
       : null
      }
      onClick={prop.onClickButton} 
      name="resume"
      >
        Resume
        </button> */}
        {/* <button 
      style={
        prop.CurrentlyActiveButton ==='gallery' 
        ? ActiveButtonStyle 
        : null
      } 
      onClick={prop.onClickButton} 
      name="gallery"
      >
        Home
        </button> */} 
    </div>
   
  );
}

export default Header;

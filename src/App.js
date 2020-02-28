import React, {useState} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingContainer from './Components/LandingContainer';
import AboutMeContainer from './Components/AboutMeContainer';

function App() {
 
    const [show, setShow]= useState(true);

  return (
    <div>
      <div className="menu">
        <div style={{width: '100%', lineHeight: '130px', textAlign: 'center'}}>
        <AiOutlineMenu className="menu-icon" style={{color: '#fff'}} size={28}/>
        </div>
        <div className="menu-itemContainer">
            <div className="menu-item">ABOUT ME</div>
            <div className="menu-item">SKILLS</div>
            <div className="menu-item">EXPERIENCE</div>
            <div className="menu-item">CONTACT</div>
        </div>
      </div>
      <div className="mainContainer">
        <LandingContainer /> 
      </div>        
    </div>
  );
}

export default App;
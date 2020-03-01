import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
// import styled from "styled-components";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingContainer from "./Components/LandingContainer";
import { ShowContext } from "./ShowContext";

function App() {
  const [show, setShow] = useContext(ShowContext);
  function showDetails(val) {
    console.log(show, val);
    if (show !== "") {
      setShow(val);
    } else if (val === "") {
      setShow("about");
    } else {
      setShow(val);
    }
  }
  return (
    <div>
      <div className="menu">
        <div className="menu-icon">
          {/* <AiOutlineMenu size={28}  onClick={()=>showDetails('')}/> */}
          <a
            href="#"
            className={show !== "" ? "menu-trigger active" : "menu-trigger"}
            onClick={() => showDetails("")}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="menu-itemContainer">
          <div
            className={show === "about" ? "active-menu menu-item" : "menu-item"}
            onClick={() => showDetails("about")}
          >
            ABOUT ME
          </div>
          <div
            className={
              show === "skills" ? "active-menu menu-item" : "menu-item"
            }
            onClick={() => showDetails("skills")}
          >
            SKILLS
          </div>
          <div
            className={
              show === "experience" ? "active-menu menu-item" : "menu-item"
            }
            onClick={() => showDetails("experience")}
          >
            EXPERIENCE
          </div>
          <div
            className={
              show === "contact" ? "active-menu menu-item" : "menu-item"
            }
            onClick={() => showDetails("contact")}
          >
            CONTACT
          </div>
        </div>
      </div>
      <div className="mainContainer">
        <LandingContainer />
      </div>
    </div>
  );
}

export default App;

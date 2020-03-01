import React, {useContext} from 'react';
import { Row, Col } from 'react-bootstrap';
import { IoMdPlay } from 'react-icons/io';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
// import Transition from 'react-transition-group/Transition';
import '../App.css';
import vignesh from '../vignesh.png'
import AboutMeContainer from './AboutMeContainer';
import ExperienceContainer from './ExperienceContainer';
import SkillsContainer from './SkillsContainer';
import ContactContainer from './ContactContainer'
import {ShowContext} from '../ShowContext';

function LandingContainer() {
  const [show, setShow]= useContext(ShowContext);
  function showDetails (){
    setShow('about')
  }
    return (
      <Row className='m-0'>
        <Col md={4} className="pl-5 landing">
          <div className="sqbg1"></div>
          <div className="sqbg2"></div>
          <div className="sqbg3"></div>
          <div className="domain">Vigneshraja<span>.me</span></div>
          <div className="nameContainer">
            <div className="hello">Hello</div>
            <div className="name">I'm Vigneshraja</div>
            <div>Full Stack Developer</div>
            <a className="hireme" href="mailto:vigneshraja20@gmail.com" target="_blank" rel='vigneshraja20@gmail.com'><span>HIRE ME</span></a>
          </div>
          <div className="socialContainer">
            <div className="socialbtn">
              <FiGithub size={22}/>
            </div>
            <div className="socialbtn">
              <FiLinkedin size={22}/>
            </div>
            <div className="socialbtn">
              <FiLinkedin size={22}/>
            </div>
            <div className="socialbtn">
              <FiLinkedin size={22}/>
            </div>
          </div>
          <div className="playbtn" onClick={showDetails}><IoMdPlay size={24}/></div>
        </Col>
        <Col md={8} className='p-0'>   
          <img src={vignesh} alt="vignesh" className="profile" /> 
          <div className="p-4">
            <p className="introAnimation">Full stack web developer with expertise in JavaScript technologies
              primarily with React JS. Design and develop efficient and intuitive user
              interfaces for web applications while continuing to learn and expand my
              knowledge of emerging web technologies.</p>
             <div className="viewresume introAnimation"><span>VIEW RESUME</span></div>
             </div>
        </Col>
        {show &&
          <div className="detailsContainer">
            {show=== 'about' &&
              <div>
                <h6 className="title">About</h6>
                <AboutMeContainer />
              </div>
            }
             {show=== 'skills' &&
              <div>
                <h6 className="title">Skills</h6>
                <SkillsContainer />
              </div>
            }
           {show=== 'experience' &&
              <div>
                <h6 className="title">Experience</h6>
                <ExperienceContainer />
              </div>
            }
            {show=== 'contact' &&
              <div>
                <h6 className="title">Contact</h6>
                <ContactContainer />
              </div>
            }
          </div>
        }
      </Row>
    );
  }
  
  export default LandingContainer;
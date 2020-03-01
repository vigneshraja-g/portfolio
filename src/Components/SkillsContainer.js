import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiEdit2, FiLayout, FiServer, FiCpu, FiDatabase } from "react-icons/fi";

function SkillsContainer() {
  return (
    <Row className="m-0 item">
      <Col md={6}>
        <div className="skillContainer">
          <div className="skillIcon">
            <FiEdit2 size={32} />
          </div>
          <div className="skillContent">
            <h5>Web Design</h5>
            <p>thasi woiklnsaa nakdsaw ihi sadw ommi asdnaks wjams</p>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillIcon">
            <FiCpu size={32} />
          </div>
          <div className="skillContent">
            <h5>Backend Development</h5>
            <p>thasi woiklnsaa nakdsaw ihi sadw ommi asdnaks wjams</p>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillIcon">
            <FiServer size={32} />
          </div>
          <div className="skillContent">
            <h5>Deployment</h5>
            <p>thasi woiklnsaa nakdsaw ihi sadw ommi asdnaks wjams</p>
          </div>
        </div>
      </Col>
      <Col md={6}>
        <div className="skillContainer">
          <div className="skillIcon">
            <FiLayout size={32} />
          </div>
          <div className="skillContent">
            <h5>Frontend Development</h5>
            <p>thasi woiklnsaa nakdsaw ihi sadw ommi asdnaks wjams</p>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillIcon">
            <FiDatabase size={32} />
          </div>
          <div className="skillContent">
            <h5>Database</h5>
            <p>thasi woiklnsaa nakdsaw ihi sadw ommi asdnaks wjams</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SkillsContainer;

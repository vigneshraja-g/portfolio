import React from 'react';
import { Row} from 'react-bootstrap';

function ContactContainer() {
    return (
      <Row className='m-0'>
        <div className="item">
    <div className="timeline" style={{width: '70%'}}>
       <div style={{marginBottom: '12px'}}><span style={{width:'180px', display: 'inline-block'}}>Email</span>: <a href="mailto:vigneshraja20@gmail.com">vigneshraja20@gmail.com</a></div>
       <div style={{marginBottom: '12px'}}><span style={{width:'180px', display: 'inline-block'}}>Mobile</span>: 7708322525</div>
       <div style={{marginBottom: '12px'}}><span style={{width:'180px', display: 'inline-block'}}>Alternate Mobile</span>: 7010483219</div>
</div></div>
      </Row>
    );
  }
  
  export default ContactContainer;
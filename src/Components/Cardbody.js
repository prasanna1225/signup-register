import '../CSS/Cardbody.css';
import Horizontal from '../Components/Horizontal';
import SocialButtons from '../Components/SocialButtons';
import { Button, Card, Col, Row, Form, FormGroup, FormCheck } from 'react-bootstrap';
import Picture from '../images/cardbody/Rectangle245.png'

function Cardbody() {
  return (
    <>
    
    <div style={{textAlign:'center'}}>
    <p style={{fontWeight:'600',color:'#ffffff'}} className='mt-3'>Register Edfling as a</p>
    <Button style={{color:'#215D4F' ,margin:'5px',background:'#ffffff'}} variant="light">Mentor</Button>
    </div>
     <Card className="card-body">
    <Row className=''>
      <Col md={6}>
       <img className='img-style' src={Picture} alt='pic'/>
      </Col>
      <Col md={6} className='right-part'>
      <div className='right-side'>
      <h3>Signup<span style={{color:'#000000',fontSize:'10px', fontWeight:200}}>as Mentor</span></h3>
      </div>
      <div style={{ display: 'grid', placeItems: 'center' }}>
             
                <FormGroup>
                <Form.Control className=" form" type="email" placeholder="Enter your name" />
                  <Form.Control className=" form" type="email" placeholder="Enter your email address" />
                  <Form.Control className=" form" type="password" placeholder="Enter your password" /> 
                </FormGroup>
              
              {/* Add the checkbox */}
              <FormCheck className="m-2 check-box" label="By signing up for Edfling course, you agree to our Terms of use and Privacy Policy" />
            </div>
            <Button className='signup-button my-auto'>Signup</Button>
            <Horizontal text="or" />
            <SocialButtons />
      </Col>
    </Row>
     </Card>

    </>
  );
}

export default Cardbody;

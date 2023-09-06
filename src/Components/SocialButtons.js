import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import GoogleIcon from '../images/cardbody/google.png'; // Replace with the path to your Google icon image
import FacebookIcon from '../images/cardbody/facebook.png'; // Replace with the path to your Facebook icon image
import AppleIcon from '../images/cardbody/apple-logo.png'; // Replace with the path to your Apple icon image

const SocialButtons = () => {
   


  return (
    <Container>
      <Row className="justify-content-center">
        
          <Button  className="d-flex align-items-center social-btn "  variant="outline-success">
            <img  src={GoogleIcon} alt="Google" className="mr-2 social-img m-1" />
            Continue with Google
          </Button>
        
        
          <Button  className="d-flex align-items-center social-btn"  variant="outline-success">
            <img src={FacebookIcon} alt="Facebook" className="mr-2 social-img m-1 " />
              Continue with Facebook
          </Button>
        
        
          <Button  className="d-flex align-items-center social-btn "  variant="outline-success">
            <img src={AppleIcon} alt="Apple" className="mr-2 social-img m-1" />
             Continue with Apple
          </Button>
        
      </Row>
    </Container>
  );
};

export default SocialButtons;

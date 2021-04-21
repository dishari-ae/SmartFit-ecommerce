import React from 'react';
import '../../App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SignUp.css';
function SignUp() {
  return (
    <div className='signup'>
  <h1 className='signup'>Sign Up</h1>
  <Form>
      <FormGroup className="signup-form">
        <Label for="exampleEmail">Email </Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
      </FormGroup>
      <FormGroup className="signup-form">
        <Label for="examplePassword">Password </Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
      </FormGroup>
      <FormGroup className="signup-form">
        <Label for="examplePassword">Repeat Password  </Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Repeat Password" />
      </FormGroup>
      <Button className="signup-button">Submit</Button>
    </Form>
    
    </div>
  );
}

export default SignUp;
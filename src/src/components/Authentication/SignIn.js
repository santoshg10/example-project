import React, {Component} from 'react';
import {Link} from 'react-router';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../../styles/login.css';
class SignIn extends Component  {
  constructor(props){
    super(props);
    this.state = {
        email: "",
        password: ""
    };
  }

  signIn()  {
    console.log(this.state);
  }
  
 render(){
    return (
      <div className=" box">
        <h2> SignIn</h2>
        <Form className="padding-input">
          <FormGroup className="formInline">
          <Label>Email</Label>
            <Input 
              type="text" name="emailLogin"id="emailLogin" onChange={event=> this.setState({email: event.target.value})}
              placeholder="Enter Email"/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password" name="passwordLogin" id="password" onChange={event => this.setState({password: event.target.value})}
              placeholder="Enter Password" />
          </FormGroup>
          <FormGroup>
            <Button block size="sm"color="primary" name="loginBtn" id="loginBtn" onClick={()=>this.signIn()}>Login</Button>
          </FormGroup>
        </Form>
      </div>
    )
 }
};
export default SignIn;
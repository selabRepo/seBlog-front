import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import { bindActionCreators } from 'redux'
import * as userActions from '../../ducks/user'
import './Signup.scss';

class Signup extends Component {
  constructor(props){
    super();
    this.email = null;
    this.password = null;
    this.passwordCheck = null;
    this.studentNumber = null;
    this.name = null;

    this.isMatchPassword = false;

    this.inputEmail = React.createRef();
    this.inputPassword = React.createRef();
    this.inputPasswordCheck = React.createRef();
    this.inputStudentNumber = React.createRef();
    this.inputName = React.createRef();
  }

  handleUserIdChange = (e) => {
    this.email = e.target.value;
  }

  handleNameChange = (e) => {
    this.name = e.target.value;
  }

  handlePasswordChange = (e) => {
    this.password = e.target.value;
  }

  handlePasswordCheckChange = (e) => {
    this.passwordCheck = e.target.value;
  }

  handleStudentNumberChange = (e) => {
    this.studentNumber = e.target.value
  }

  checkPassword = (input1, input2) => {
    this.isMatchPassword = (input1===input2);
  }

  handleSignup = () => {
    
    if(this.inputEmail.current.value==''){
      alert("Please, Input your Email(ID).");
      return;
    }

    if(this.inputPassword.current.value == ''){
      alert("Please, Input your password.");
      return;
    }

    if(this.inputPasswordCheck.current.value == ''){
      alert("Please, Input your password Check.");
      return;
    }
    
    if(this.inputName.current.value == ''){
      alert("Please, Input your name.");
      return;
    }

    if(this.inputStudentNumber.current.value == ''){
      alert("Please, Input your student Number.");
      return;
    }

    if(this.isMatchPassword === false){
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    this.props.UserActions.userSignup({email:this.email, password : this.password, studentNumber : this.studentNumber, name: this.name, roles : [{role: "ROLE_USER"}]})
  }
  
  componentDidUpdate(prevProps, prevState){
    if(this.props.user.isSignupSuccess===true){
      location.href="/login"
    }else{
      alert("Signup Failure.");
    }
  }
  
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline>
          <div className="signup-template">
            <span className="signup-title">
              <h3>Sign up</h3>
            </span>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleUserIdChange}
              inputRef = {this.inputEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
              inputRef = {this.inputPassword}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordCheck"
              label="Password check"
              type="password"
              id="passwordCheck"
              inputRef = {this.inputPasswordCheck}
              onChange = {this.handlePasswordCheckChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="name"
              id="name"
              onChange={this.handleNameChange}
              inputRef = {this.inputName}
            />
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="studentNumber"
              label="학번"
              type="number"
              id="studentNumber"
              onInput={(e) => {
                e.target.value = (e.target.value).toString().slice(0, 2)
              }}
              onChange={this.handleStudentNumberChange}
              inputRef = {this.inputStudentNumber}
            />

            <Button fullWidth variant="contained" color="primary" className="submit" onClick={this.handleSignup}>
              sign up
            </Button>

          </div>
        </CssBaseline>
      </Container>
    )
  }
}

export default connect(
  state => ({
     user : state.user
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(Signup)
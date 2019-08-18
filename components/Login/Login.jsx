<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
=======
import React from 'react';
>>>>>>> dd66802310dfdae8418cea153e5302e90aca1175
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
<<<<<<< HEAD
import { bindActionCreators } from 'redux';
import * as userActions from '../../ducks/user';
import './Login.scss';

class Login extends Component {
  
  constructor(props) {
    super()
    this.userID = null
    this.userPassword = null
  }
  handleLogin = () => {
    this.props.UserActions.userSignup({userName: this.userID, password: this.userPassword});
  }

  handleUserIdChange = (e) => {
    this.userID = e.target.value;
  }

  handleUserPasswordChange = (e) => {
    this.userPassword = e.target.value;
  }
  

  render() {
    return (
      <Container component="main" maxWidth="xs">

        <CssBaseline>
          <div className="login-template">
            <span className="login-title">
              <h1>SE.LOG</h1>
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
              autoComplete="current-password"
              onChange={this.handleUserPasswordChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              onClick={this.handleLogin}
            >
              login
        </Button>
            <Grid container className="grid-container">
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Sign up"}
                </Link>
              </Grid>
            </Grid>
          </div>
        </CssBaseline>
      </Container>
    );
  }
}

export default connect(
  state => ({
    
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(Login)
=======
import './Login.scss';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      
      <CssBaseline>
        <div className="login-template">
        <span className ="login-title">
          <h1>SE.LOG</h1>
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
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            login
        </Button>
          <Grid container className="grid-container">
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Sign up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </CssBaseline>
    </Container>
  );
}
export default Login;
>>>>>>> dd66802310dfdae8418cea153e5302e90aca1175

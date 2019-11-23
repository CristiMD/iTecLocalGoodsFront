import React, { Component} from 'react';
import {login} from '../actions/userActions';
import '../styles/Login.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { connect } from 'react-redux';


class Login extends Component{

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    let type = e.target.name;
    if(type==="password") {
      if(e.target.value.length > 6) {
        this.setState({
            [type]: e.target.value
          })
      }
    }
    else if(e.target.value.length > 1) {
      this.setState({
          [type]: e.target.value
        })
    }
  }

  submitLogin = () => {
    if(this.state.email.length > 1 && this.state.password.length > 6) {
      this.props.login(this.state.email, this.state.password);
    }
  }

  render() {
    return (
        <div className="login-form-wrapper">
          <Nav/>
            <div className="main-form-wrapper">
                <div className="logo-wrapper">
                <h1>Log In</h1>
                  <input className="login-form-field" placeholder="Username" type="email" name='email' required onChange = { (e) => this.handleChange(e)}/>
                  <input className="login-form-field" placeholder="Password" type="password" name='password' required onChange = { (e) => this.handleChange(e)}/>
                  <button className="login-form-button" type="button" onClick={() => this.submitLogin()}>Log In</button>
                </div>
            </div>
            <Footer/>
        </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(login(email, password))
    }
  }
}

const mapStateToProps = state => ({
  test: state.items
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

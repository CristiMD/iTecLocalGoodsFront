import React, { Component} from 'react';
import '../styles/Register.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {register} from '../actions/userActions';
import {connect} from 'react-redux';

class Register extends Component{
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      phone: '',
      name: '',
      isSeller: false,
      coordinates:{
          lat: '',
          lng: ''
      }
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
  submitRegister = () =>{ 
    if(this.state.email.length > 1 && this.state.password.length > 6 && this.state.name.length > 1 && this.state.address.length > 1) {
      this.props.register(this.state.email, this.state.phone, this.state.name, this.state.password);
    }
  }
  render() {
    return (
        <div className="register-form-field">
          <Nav/>
            <div className="main-form-wrapper">
                <div className="logo-wrapper">
                <h1>Register</h1>
                  <input className="register-form-field" placeholder="Name" type="text" name='name' required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Phone" type="phone" name='phone' required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Email" type="email" name='email' required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Password" type="password" name='password' required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Confirm Password" type="password" name='confirm-password' required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Address" type="text" name='address' required onChange={(e) => this.handleChange(e)}/>
                  <select className="register-form-field" name="isSeller" onChange={(e) => this.handleChange(e)}>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                  </select>
                  <button className="register-form-button" type="button" onClick={() => this.submitRegister()}>Register</button>
                </div>
            </div>
            <Footer/>
        </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, password, name, phone) => {
      dispatch(register(email, password, name, phone))
    }
  }
}

const mapStateToProps = state => ({
  test: state.items
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);

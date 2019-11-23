import React, { Component} from 'react';
import '../styles/Register.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { updateProfile } from '../actions/userActions';
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
    // componentDidMount () {
    //     if(this.props.user.user.token){
    //         this.setState({
    //             email: this.props.user.user.user.email,
    //             name: this.props.user.user.user.name,
    //         })
    //     }
    // }
    componentDidUpdate(prevProps) {
        if(prevProps.user !== this.props.user) {
            if(this.props.user.user.token){
                this.setState({
                    email: this.props.user.user.user.email,
                    name: this.props.user.user.user.name,
                })
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
    submitUpdate = () => {
        if(this.state.email.length > 1 && this.state.password.length > 6 && this.state.name.length > 1 && this.state.address.length > 1) {
            this.props.updateProfile(this.state.email, this.state.phone, this.state.name, this.state.password);
        }
    }
  render() {
    return (
        <div className="register-form-field">
          <Nav/>
            <div className="main-form-wrapper">
                <div className="logo-wrapper">
                <h1>Update profile</h1>
                  <input className="register-form-field" placeholder="Name" type="text" name="name" required defaultValue={this.state.name} onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Phone" type="phone" name="phone" required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Email" type="email" name="email" required defaultValue={this.state.email} onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Password" type="password" name="password" required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Address" type="text" name="address" required onChange={(e) => this.handleChange(e)}/>
                  <select className="register-form-field">
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                  </select>
                  <button className="register-form-button" type="button" onClick={() => this.submitUpdate()}>Update Profile</button>
                </div>
            </div>
            <Footer/>
        </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
       updateProfile: (email, password, name, phone) => {
         dispatch(updateProfile(email, password, name, phone))
       }
    }
  }
  
  const mapStateToProps = state => ({
    user: state.user
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);
  
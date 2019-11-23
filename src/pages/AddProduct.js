import React, { Component} from 'react';
import '../styles/Register.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {register} from '../actions/userActions';
import {connect} from 'react-redux';
import axios from 'axios';
class AddProduct extends Component{
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
      },
      category: '',
      categories: [],
      subcategories: [],
      subcategory: ''
    }
  }


  componentDidMount() {
    axios.get('http://itec.ro/api/maincategory').then(res=> {
        res.data.map(item => {
            this.setState({
                categories: [...this.state.categories, item],
            })
        })
        
    })
    axios.get('http://itec.ro/api/subcategories').then(res=> {
        res.data.map(item => {
            this.setState({
                subcategories: [...this.state.subcategories, item],
            })
        })
        
    })
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

  handleSelectChange = (e) => {
    let type = e.target.name;
    this.setState({
        [type]: e.target.value
    })
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
                <h1>Add product</h1>
                  <input className="register-form-field" placeholder="Name" type="text" name='name' required onChange={(e) => this.handleChange(e)}/>
                  <textarea className="register-form-field" placeholder="Description" name='description' required onChange={(e) => this.handleChange(e)}></textarea>
                  <input className="register-form-field" placeholder="Price" type="text" name='price' required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Price" type="text" name='secondPrice' required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Price" type="text" name='thirdPrice' required onChange={(e) => this.handleChange(e)}/>
                  <input className="register-form-field" placeholder="Units" type="text" name='units' required onChange={(e) => this.handleChange(e)}/>
                  <select className="register-form-field" name="category" onChange={(e) => this.handleSelectChange(e)}>
                  {this.state.categories.map ((item, index) => {
                        return (
                            <option key={index} value={item.id}>{item.name}</option>
                        )
                    })}
                  </select>
                  <select className="register-form-field" name="subcategory" onChange={(e) => this.handleSelectChange(e)}>
                  {this.state.subcategories.length ? this.state.subcategories.map ((item, index) => {
                        if(item.category_id === this.state.category) {
                            return (
                                <option key={index} value={item.id}>{item.name}</option>
                            )
                        }
                    }) : ''}
                  </select>
                  <input className="register-form-field" placeholder="Address" type="text" name='address' required onChange={(e) => this.handleChange(e)}/>
                  <select className="register-form-field" name="isSeller" onChange={(e) => this.handleChange(e)}>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                  </select>
                  <button className="register-form-button" type="button" onClick={() => this.submitRegister()}>Submit Product</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

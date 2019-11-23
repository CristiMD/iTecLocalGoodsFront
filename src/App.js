import React, { Component}  from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SingeProduct from './pages/SingeProductPage';
import Account from './pages/Account';
import AddProduct from './pages/AddProduct';
import CategoryListings from './pages/CategoryListings';
import { isLoggedIn } from './actions/userActions';
import {connect} from 'react-redux';
class App extends Component {
  componentDidMount () {
    if(localStorage.getItem('user')) {
      this.props.isLoggedIn(JSON.parse(localStorage.getItem('user')));
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/ad/:prodId' component={SingeProduct} />
          <Route path='/account' component={Account} />
          <Route path='/addproduct' component={AddProduct} />
          <Route path='/cat/:id' component={CategoryListings}/>
        </Switch>
        
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedIn: (user) => {
      dispatch(isLoggedIn(user))
    }
  }
}

const mapStateToProps = state => ({
  test: state.items
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

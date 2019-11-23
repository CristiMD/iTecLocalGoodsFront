import React, { Component} from 'react';
import '../styles/Nav.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
class Nav extends Component{
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container navbar-container">
        <Link className="navbar-brand" to="/">Goods</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 navbar-right">
          {this.props.user.user.token ? 
            <li className="nav-item active">
              <Link className="nav-link" to="/account">My Account</Link>
            </li>
            : ''}
            {!this.props.user.user.token ? 
              <li className="nav-item active">
            <Link className="nav-link" to="/register">Register</Link>
            </li>
            : ''}
            {!this.props.user.user.token ? 
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            :
            <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => this.props.logout()}>Logout</Link>
          </li>}
            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Sell</button>
          </ul>
        </div>
        </div>
      </nav>

      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

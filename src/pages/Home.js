import React, { Component} from 'react';
import { connect } from 'react-redux';
import '../styles/Home.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../components/prodList';
import axios from 'axios';

class Home extends Component{
  constructor (props) {
    super(props);
    this.state = {
      category: 'all',
    }
  }

  loadProducts = (item) => {
    this.setState({
      category: item
    })
  }

  render() {
    console.log(this.props);
    return (
        <div className="home-wrapper">
          <Nav />
          <Header history = {this.props.history}/>
          <ProductList category = {this.state.category}/>
          <Footer/>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Home);

import React, { Component} from 'react';
import { connect } from 'react-redux';
import '../styles/SingleProduct.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import cartofi from '../img/cartofi.jpg';

class SingleProduct extends Component{
  constructor (props) {
    super(props);
    this.state = {
      list: false,
    }
  }

  render() {
    return (
        <div className="single-prod-wrapper">
          <Nav />
          <div className="prod-gallery">
              <img src={cartofi} alt="cartof" />
          </div>
          <div className="prod-info">
            <div className="prod-title">
                Test Product
            </div>
            <div className="prod-initial-price">
                29.99
            </div>
            <div className="prod-qty">
                <span className="stock-qty">19.99</span>
            </div>
            <div className="prod-total">
                199
            </div>
          </div>
          <div className="prod-description">
              kjegfkjsdfjksdbvklsnbvklsnvklsdnvklsnvlksdnvklashivlahb;valuesdvlknsavkjbv
              lvbsakjbvakdbvlshvlsdv
              sokvhslibvasp;gallerysjda;lbvldakvbn
          </div>
          <Footer/>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  test: state.items
})

export default connect(mapStateToProps)(SingleProduct);

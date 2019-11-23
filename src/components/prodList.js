import React, { Component} from 'react';
import '../styles/prodList.scss';
import cartofi from '../img/cartofi.jpg';
import axios from 'axios';

class ProductList extends Component{

    constructor (props) {
        super(props);
        this.state = {
          prodList: [],
        }
      }

    
  componentDidMount () {
      let x = 0;
    axios.get('http://itec.ro/api/products').then(res=> {
        if(this.props.match && this.props.match.params.id) {
            while(1) {
                if(res.data[x].id === this.props.location.match.id) {
                    this.setState({
                        prodList: [...this.state.prodList, res.data[x]],
                    })
                    x++;
                }
                if(x>12) {
                    break;
                }
            }
            for(let i=0; i < 11; i++) {
                this.setState({
                    prodList: [...this.state.prodList, res.data[i]],
                })
              }
        } else {
            for(let i=0; i < 11; i++) {
                this.setState({
                    prodList: [...this.state.prodList, res.data[i]],
                })
            }
        }
      
    })
  }

  componentWillReceiveProps(prevProps) {
      if(prevProps.category !== this.props.category) {
          this.setState({
              prodList:[]
          })
        axios.get('http://itec.ro/api/products').then(res=> {
          for(let i=0; this.state.prodList.length < 11; i++) {
            if(res.data[i] === this.props.category) {
                 this.setState({
                     prodList: [...this.state.prodList, res.data[i]],
                 })
            } else if (res.data[i] === undefined) {
                break;
            }
    
          }
        })
      }
  }

    
    toggleListing = (type) => {
        if(type === 'list') {
            this.setState({
                list: true
            })
        } else if (type === 'grid'){
            this.setState({
                list: false
            })
        }
        
    }

  render() {
      console.log(this.props)
    return (
        <div className="prodlist container">
        <div className="actions">
            <button onClick={() => this.toggleListing('list')} className="list-toggle">List</button>
            <button onClick={() => this.toggleListing('grid')}className="list-toggle">Grid</button>
        </div>
        <div className="products">
            <div className="row">
                {this.state.prodList.map((prod, index) => {
                    return(
                    <div key={index} className= {this.state.list ? 'product-ad-list' : 'col-sm-3 product-ad-grid'}>
                    <div className="product-ad-img">
                        <img src={cartofi} alt="cartof"/>
                    <div className="price-tag"><p>{prod.price}</p></div>
                        <h5>{prod.name}</h5>
                    <span className="address-grey">{prod.address}</span>
                    </div>
                    </div>
                    )
                })}
            </div>
          </div>
          </div>
          );
        }
    }
export default  ProductList;
      
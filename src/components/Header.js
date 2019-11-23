import React, { Component} from 'react';
import '../styles/Header.scss';
import Map from './map';
import axios from 'axios';


class Header extends Component{

    constructor (props) {
        super(props);
        this.state = {
          isMap: false,
          categories: [],
          coord: {
              lat: '',
              lng: '',
          }
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
    }
    
    toggleMap = () => {
        this.setState({
            isMap: !this.state.isMap
        })
        this.getLocation();
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log('not supported');
        }
        }
    
    showPosition = (position) => {
        this.setState({
            coords: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    }

    loadProducts = (id) => {
        console.log(this.props)
        this.props.history.push('/cat/'+id)
    }


  render() {
    return (
    <div className="container header-container">
        <div className="row">
            <div className="col-sm-6">
                <input type="text" className="search-form" placeholder="Insert search terms"/>
            </div>
            <div className="col-sm-4">
                <select className="region-select">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="col-sm-2">
                <button className="search-button">Search</button>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
            </div>
            <div className="col-sm-4">
                <button className="map-toogle" onClick={() => this.toggleMap()}>Or chose on the map</button>
            </div>
            <div className="col-sm-2">
            </div>
        </div>
        
        {this.state.isMap ?
        <div className="map-container">
            <Map coords={this.state.coords}/>
        </div>
         : ''}
        <div className="category-row">
            {this.state.categories.map ((item, index) => {
                console.log(item)
                return (
                <button key={index} type="button" className="category" onClick={() => this.loadProducts(item.id)}>{item.name}</button>
                )
            })}
        </div>
        </div>
      );
  }
}

export default  Header;

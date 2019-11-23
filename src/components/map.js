import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
        }
      }

    componentDidMount () {
        if(this.props.coords) {
            this.setState({
                lat: this.props.coords.lat,
                lng: this.props.coords.lng
            })
        }
    }

    setCenter = () => {
        if(this.props.coords) {
            this.setState({
                lat: this.props.coords.lat,
                lng: this.props.coords.lng
            })
        }
    }

    recenterMap = (mapProps, map, clickEvent) => {
        this.setState({
            lat: clickEvent.latLng.lat(),
            lng: clickEvent.latLng.lng()
        })
    }


  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{
        lat: this.state.lat,
        lng: this.state.lng
      }} center={{
        lat: this.state.lat,
        lng: this.state.lng
      }} onClick={this.recenterMap}>
          <button className="home-toggle" onClick={() => this.setCenter()}>A</button>
 
        <Marker onClick={this.onMarkerClick}
        position={{lat: this.state.lat, lng: this.state.lng}} 
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>khgfyfvk
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDZ0spd7l768g21YkPaHK40cBndELyjPJk')
})(MapContainer)
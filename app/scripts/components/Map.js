import { default as React, Component } from 'react';
import {GoogleMap, Marker,GoogleMapLoader,InfoWindow } from 'react-google-maps';
export default class Map extends Component {

  renderInfoWindow(marker) {
    const {details} = this.props;
    return (
      <InfoWindow onCloseclick={this.handleMarkerClose.bind(this, marker)} >
        <b>{details.name}<br/>Region - {details.region}, Area - {details.area}</b>
      </InfoWindow>
    );
  }

  handleMarkerClick(marker) {
    this.props.openInfo();
    marker.showInfo = this.props.showInfo;
  }

  handleMarkerClose(marker) {
    this.props.closeInfo();
    marker.showInfo = this.props.showInfo;
  }

  render() {
    const {details,showInfo} = this.props;
    const marker = {
      position: {
        lat: details.latlng?details.latlng[0]:0,
        lng: details.latlng?details.latlng[1]:0,
      },
      key: details.name,
      defaultAnimation: 7,
      showInfo:showInfo
    };
    return (
      <section className='map-content'>
        <GoogleMapLoader
          query={{libraries: 'geometry,drawing,places' }}
          containerElement={<div style={{ height: '500px', }}/>}
          googleMapElement={
            <GoogleMap containerProps={{style: { height: '500px' }}} zoom = {marker.key?4:3} center={{ lat: marker.position.lat, lng:marker.position.lng }}>
              <Marker position = {marker.key?marker.position:null} onClick={this.handleMarkerClick.bind(this, marker)} >
                {marker.showInfo ? this.renderInfoWindow(marker) : null}
              </Marker>
            </GoogleMap>
          }
        />
      </section>
    );
  }
};

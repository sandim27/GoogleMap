import { default as React, Component } from 'react';

import { GoogleMap,GoogleMapLoader } from 'react-google-maps';

export default class Map extends Component {

  render() {
    return (
      <div>
        <GoogleMapLoader
          containerElement={<div {...this.props} style={{ height: '500px', }}/>}
            googleMapElement={
              <GoogleMap containerProps={{ ...this.props, style: { height: '500px' }}}
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
              />
             }
           />
      </div>
     );
  }
}

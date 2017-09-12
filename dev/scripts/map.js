import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

class MapTest extends React.Component {
	render (){
		const markers = this.props.markers || []
		return (
			<GoogleMap
				defaultZoom={15}
				defaultCenter={{ lat: 43.6482683, lng: -79.4000474 }}
				// googleMapURL={googleMapURL}
			>
				{markers.map((userMarker) => (
					<Marker
						position={{ lat: userMarker.lat, lng: userMarker.lng }}
					 />
					)
				)}
			</GoogleMap>
		)
	}
}

export default withGoogleMap(MapTest);
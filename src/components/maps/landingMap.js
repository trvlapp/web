import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

const containerStyles = {
    position: 'relative',
    top: '0',
    left: '0'
}

class LandingMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLocation: {
                lat: 33,
                lng: -117,
                loading: true
            },
        };

        this.handleMapReady = this.handleMapReady.bind(this);
    }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                this.setState({
                    userLocation: { lat: latitude, lng: longitude },
                    loading: false
                });

                this.forceUpdate();
            }
        );
    }

    handleMapReady(mapProps,map) {
        map.setOptions({
            draggableCursor: "default",
            draggingCursor: "default"
        });
    }

    render() {
        return (
            <div>
            {
                this.state.loading ? (
                    <div>
                        the page is loading
                    </div>
                ) : (
                    <Map
                        google={this.props.google}
                        className="landing-map"
                        zoom={11}
                        style={mapStyles}
                        containerStyle={{containerStyles}}
                        onReady={this.handleMapReady}
                        initialCenter={{
                            lat: this.state.userLocation.lat,
                            lng: this.state.userLocation.lng
                        }}
                        center={{
                            lat: this.state.userLocation.lat,
                            lng: this.state.userLocation.lng
                        }}
                        zoomControl={false}
                        mapTypeControl={false}
                        scaleControl={false}
                        streetViewControl={false}
                        panControl={false}
                        rotateControl={false}
                        fullscreenControl={false}
                        scrollwheel={false}
                        draggable={false}
                        keyboardShortcuts={false}
                        disableDoubleClickZoom={true}
                    />
                )
            }
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'API KEY'
})(LandingMap);

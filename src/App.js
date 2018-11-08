import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import locations from './locations.json';

const MAP_KEY = 'AIzaSyA0DHwVdcQEAjyzGquFF-1ROaaClowVr0c';

const mapStyles = {
    height: '100%',
    width: '100%'
};

const mapCenter = {
    lat: 37.697948,
    lng: -97.314835
}

const mapZoom = 5;

class App extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        allLocations: locations
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    onClose = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    } 
    render() {
        return (
            <div className="App">
                <div className="header-div">
                    <h1 className="page-name">MLB Ballparks</h1>
                </div>
                <Map   
                    google = { this.props.google }
                    zoom = { mapZoom }
                    style = { mapStyles }
                    initialCenter = { mapCenter }
                    locations = { this.state.allLocations }
                >
                    {locations.map((location) => {
                        return (
                            <Marker
                                key = { location.team }
                                onClick = { this.onMarkerClick }
                                name = { location.team }
                                position = { location.position }
                            />
                        )
                    })}
                    <InfoWindow
                        marker = { this.state.activeMarker }
                        visible = { this.state.showingInfoWindow }
                        onClose = { this.onClose }
                    >
                        <div>
                            <h4>{ this.state.selectedPlace.name }</h4>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({apiKey: MAP_KEY})(App)

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
    lat: 40.806862,
    lng: -96.681679
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
                    <Marker
                        onClick = { this.onMarkerClick }
                        name = { this.state.allLocations[0].team }
                    />
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

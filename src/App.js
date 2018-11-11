import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import locations from './locations.json';
import Dropdown from './Dropdown';

const MAP_KEY = 'AIzaSyA0DHwVdcQEAjyzGquFF-1ROaaClowVr0c';

const mapStyles = {
    height: '100%',
    width: '100%',
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
        allLocations: locations,
        open: true,
        query: ''
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
    updateQuery = (query) => {
        this.setState({ query })
    }
    toggleHamburger = () => {
        this.setState({
            open: !this.state.open
        });
        const dropdown = document.querySelector('.dropDown-menu');

        if (this.state.open === true) {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
    render() {
        return (
            <div className="App">
                <div className="header-div">
                    <h1 className="page-name">MLB Ballparks</h1>
                    <button 
                        className="hamburger"
                        onClick = { this.toggleHamburger }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <Dropdown 
                    locations = { this.state.allLocations }
                    open = { this.state.open }
                    toggleMenu = { this.toggleHamburger }
                    updateQuery = { this.updateQuery }
                    query = { this.state.query }
                />
                <Map 
                    className="map"  
                    google = { this.props.google }
                    zoom = { mapZoom }
                    style = { mapStyles }
                    initialCenter = { mapCenter }
                    locations = { this.state.allLocations }
                >
                    {locations.filter(location => location.park.toLowerCase().includes(this.state.query.toLowerCase())).map(location => {
                        return (
                            <Marker
                                key = { location.team }
                                onClick = { this.onMarkerClick }
                                name = { location.team }
                                home = { location.park }
                                address = { location.address }
                                city = { location.city }
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
                            <h4>{ this.state.selectedPlace.home }</h4>
                            <h4>{ this.state.selectedPlace.address }</h4>
                            <h4>{ this.state.selectedPlace.city }</h4>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({apiKey: MAP_KEY})(App)

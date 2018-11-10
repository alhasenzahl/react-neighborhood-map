import React, { Component } from 'react';
import './App.css';

class Dropdown extends Component {
    state = {
        query: '',
        searchedParks: [],
    }
    render() {
        return (
            <div className="dropDown-menu">
                <input 
                    className="search-field"
                    type="text" 
                    placeholder="Search by ballpark"
                    // value={ this.state.query } 
                    // onChange={(event) => this.updateQuery(event.target.value)} 
                />
                <div className="location-list">
                    {this.props.locations.map((location) => {
                        return (
                            <button
                                key= { location.team }
                            >{ location.park } - { location.team }</button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Dropdown
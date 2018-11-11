import React, { Component } from 'react';
import './App.css';

class Dropdown extends Component {
    render() {
        return (
            <div className="dropDown-menu">
                <input 
                    className="search-field"
                    type="text" 
                    placeholder="Search by ballpark"
                    value={ this.props.query } 
                    onChange={(event) => this.props.updateQuery(event.target.value)} 
                />
                <div className="location-list">
                    {this.props.locations.filter(location => location.park.toLowerCase().includes(this.props.query.toLowerCase())).map(location => {
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
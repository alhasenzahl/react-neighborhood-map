import React, { Component } from 'react';
import './App.css';

class Dropdown extends Component {
    render() {
        return (
            <div className="dropDown-menu">
                <input 
                    className="search-field"
                    type="text" 
                    placeholder="Search by ballpark or team"
                    // value={ this.state.query } 
                    // onChange={(event) => this.updateQuery(event.target.value)} 
                />
                <div className="search-list-container">

                </div>
                <div className="button-container">
                    <button className="button left">AL East</button>
                    <button className="button">AL Central</button>
                    <button className="button left">AL West</button>
                    <button className="button">NL East</button>
                    <button className="button left">NL Central</button>
                    <button className="button">NL West</button>
                </div>
            </div>
        )
    }
}

export default Dropdown
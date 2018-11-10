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
                    placeholder="Search by ballpark or team"
                    // value={ this.state.query } 
                    // onChange={(event) => this.updateQuery(event.target.value)} 
                />
            </div>
        )
    }
}

export default Dropdown
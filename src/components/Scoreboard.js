import React, { Component } from 'react';
import './../assets/css/scoreboard.css';

export default class Scoreboard extends Component {
    render() {
        return (
            <div className="scoreboard">
                { this.props.userScore || 0 } : { this.props.compScore || 0 } 
            </div>
        )
    }
}
import React, { Component } from 'react';
import './../assets/css/button.css';

export default class Button extends Component {
    render() {
        return (
            <div 
                className={this.props.type ? `button button-${this.props.type}` : 'button'}
                onClick={this.onClick.bind(this)}
            >
            </div>
        )
    }

    onClick() {
        this.props.onClick(this.props.type)
    }
}
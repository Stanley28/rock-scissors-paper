import React, { Component } from 'react';
import Button from './Button';
import types from './../consts/types';
import './../assets/css/buttons.css';

export default class Buttons extends Component {
    getButtons() {
        return types.map((value, i) => {
            return <Button 
                        key={i} 
                        type={value} 
                        onClick={this.onClickCallback.bind(this)}
                    />
        });
    }

    onClickCallback(type) {
        this.props.choiceCallback(type);
    }

    render() {
        return (
            <div className="buttons">
                {this.getButtons()}
            </div>
        );
    }
}
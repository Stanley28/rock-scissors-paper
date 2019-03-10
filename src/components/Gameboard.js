import React, { Component } from 'react';
import ScoreBoard from './Scoreboard';
import Buttons from './Buttons';
import types from './../consts/types';
import './../assets/css/gameboard.css';

export default class Gameboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userScore: 0,
            compScore: 0,
            title: ''
        };
    }

    render() {
        return (
            <div className="gameboard">
                <ScoreBoard 
                    userScore={this.state.userScore}  
                    compScore={this.state.compScore}
                />
                <div className="gameboard-title">{this.state.title}</div>
                <Buttons 
                    choiceCallback={this.onChoiceCallback.bind(this)}
                />
            </div>
        )
    }

    onChoiceCallback(userChoice) {
        let compChoice = types[Math.floor(Math.random() * types.length)];
        
        if (userChoice === compChoice) {
            this.setTitle('draw');

            return;
        }

        switch (userChoice) {
            case 'rock':
                switch (compChoice) {
                    case 'paper':
                        this.setState(state => ({
                            compScore: ++state.compScore
                        }));

                        this.setTitle('lose', userChoice, compChoice);
                    
                    break;

                    case 'scissors':

                        this.setState(state => ({
                            userScore: ++state.userScore
                        }));

                        this.setTitle('win', userChoice, compChoice);

                    break;
                }
                
            break;

            case 'paper':
                switch (compChoice) {
                    case 'rock': 
                        
                        this.setState(state => ({
                            userScore: ++state.userScore
                        }));

                        this.setTitle('win', userChoice, compChoice);
                
                    break;

                    case 'scissors':

                        this.setState(state => ({
                            compScore: ++state.compScore
                        }));

                        this.setTitle('lose', userChoice, compChoice);

                    break;
                }

            break;

            case 'scissors':
                switch (compChoice) {
                    case 'rock': 

                        this.setState(state => ({
                            compScore: ++state.compScore
                        }));

                        this.setTitle('lose', userChoice, compChoice);
                
                    break;
                
                    case 'paper':

                        this.setState(state => ({
                            userScore: ++state.userScore
                        }));

                        this.setTitle('win', userChoice, compChoice);
                
                    break;
                }

            break;
        }
    }

    setTitle(resultType, userChoice, compChoice) {
        switch(resultType) {
            case 'draw':
                this.setState(state => ({
                    title: 'DRAW!'
                }));
            break;

            case 'win':
                this.setState(state => ({
                    title: `${userChoice} beat ${compChoice}!`
                }));
            break;

            case 'lose':
                this.setState(state => ({
                    title: `${userChoice} lose ${compChoice}!`
                }));
            break;
        }
    }
}
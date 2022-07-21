import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
        console.log("state"+this.state);
   this.setState({
    ...this.state,renderBall : true
   })
   }
    renderBallOrButton() {
        console.log("state"+this.state.ballPosition.left);
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
    
        document.addEventListener("keydown", () => {
            if(window.event.keyCode == 39){
                
                let position = this.state.posi + 5;
                this.setState({...this.state,posi:position, ballPosition: {left: position + 'px'}})
           }
        })
   
    }

    updataPosi(){
        alert()
    }
    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;

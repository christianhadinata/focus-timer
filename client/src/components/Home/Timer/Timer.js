import React, { Component } from "react";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class Timer extends Component {
    state = {
        isCountdown: false,
    };

    pressKey = (e) => {
        if(e.altKey && e.target === document.body) {
            e.preventDefault();

            if (e.keyCode === 83) {
                this.changeType();
            }
        }
    }
    componentDidMount(){
        document.addEventListener("keydown", this.pressKey, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.pressKey, false);
    }

    render() {
        return (
            <div className="timer">
                <div className="timer-header d-flex flex-row justify-content-center">
                    {this.state.isCountdown === false && 
                        (<button className="timer-type" style={activeTypeStyle} onClick={this.changeToStopwatch}>Stopwatch</button>)}

                    {this.state.isCountdown === false && 
                        (<button className="timer-type" onClick={this.changeType}>Countdown</button>)}

                    {this.state.isCountdown === true && 
                        (<button className="timer-type" onClick={this.changeType}>Stopwatch</button>)}

                    {this.state.isCountdown === true && 
                        (<button className="timer-type" style={activeTypeStyle} onClick={this.changeToCountdown}>Countdown</button>)}
                </div>
                
                <div className="timer-body">
                    {this.state.isCountdown === false && (<Stopwatch />)}
                    {this.state.isCountdown === true && (<Countdown />)}
                </div>

                <div className="timer-description">
                    <div className="d-flex flex-row justify-content-center">
                        <input type="string" className="add-description" placeholder="Add Description (Optional)"/>
                    </div>
                    
                    <div className="d-flex flex-row justify-content-center">
                        <p className="add-description-text">
                            Everytime timer ends, task description and time <br />
                            stamp will be recorded in History 
                        </p>
                    </div>
                </div>
                
            </div>
        );
    }

    /* stopWatch */
    changeType = () => {
        this.setState( {
            isCountdown: !(this.state.isCountdown)
        })
    }
}

var activeTypeStyle = {
    borderColor: "#FF994E",
    color: "#FF994E"
}

export default Timer;
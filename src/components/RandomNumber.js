/**
 * Created by kong333 on 2017. 11. 20..
 */
import React from 'react';
import ReactDOM from 'react-dom';


class RandomNumber extends React.Component {
    updateNumber(){
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value);
    }

    constructor(props){
        super(props);
        console.log(this.props);
        this.updateNumber = this.updateNumber.bind(this);
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.updateNumber}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
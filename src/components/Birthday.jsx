import React, { Component } from 'react';

class Birthday extends Component {
    constructor(props){
        super(props);
        this.state = {
            numBirthdays: this.props.numBirthdaysExperienced
        };
    }

    render(){

        const birthdayCelebrate = () => {
            console.log("Happy Birthday! A key-paw down event clicked and added another year");
            this.setState({numBirthdays: this.state.numBirthdays+1})
        }
    

    return (
        <>
            <div className="petBirthdayCard">
                <h2>Pet name: {this.props.nameOfBirthdayPet} </h2>
                <h3>Favorite Birthday Cake: {this.props.flavorCake}</h3>
                <h1>One more year! {this.state.numBirthdays}</h1>
                <p><button onClick = {birthdayCelebrate}>Birthday Count!</button></p>
            </div>

        </>
    )
    }
}

export default Birthday;
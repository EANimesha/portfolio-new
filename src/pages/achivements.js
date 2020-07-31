import React, { Component } from 'react'
import Header from '../components/header/header'

export class Achievements extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Achievements</h1>
                <h2>Sports</h2>

                <h4>
                The Spell 2019 - Invitational university scrabble Encounter Organized by University of kelaniya - <h3>Best Player</h3>
                </h4>
                <img  src={require(`../assets/photos/1.jpg`)} alt="react" height="200" width="400"/>

                <h4>
                Awarded as the best performing Scrabble Player of the year -University of Kelaniya Colors Award 2020
                </h4>
                <img  src={require(`../assets/photos/2.jpg`)} alt="react" height="400" width="300"/>

                <h2>ACADEMIC & HACKATHON</h2>

                <ul>
                    <h4>1st Year Deans List (Ranking first place) of faculty of science,University of Kelaniya,  2019 November</h4>
                    <h4>SHECODEResss v3.0 organized by WIE,Uwa Wellassa University</h4>
                    <h4>Breaking Codes 1.0 - 2nd Place</h4>
                    <h4>IEEE INSL Hackathon - final 10</h4>
                    <h4>Web development - Information & Communication Technology Competition -Divisional Level 4th Place(School Level)</h4>
                </ul>
            </div>
        )
    }
}

export default Achievements

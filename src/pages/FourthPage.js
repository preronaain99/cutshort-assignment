import React, { Component } from 'react';
import { Checkmark } from 'react-checkmark';
import navbarLogo from '../assets/navbarLogo.png';
import "../styles.css";
class FourthPage extends Component {
    render() { 
        return (
            <div>
                 <img className='center' src={navbarLogo } />
                <Checkmark color='#664de5' size='large'/><br></br><br></br>
                <div>
                <h3 className='headline'>Congratulations, Eren!</h3>
                <h3 className='text'>You have completed onboarding, you can start using the Eden!</h3>
                </div>
            </div>
        );
    }
}
 
export default FourthPage;
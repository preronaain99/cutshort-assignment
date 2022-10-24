import React, { Component } from 'react';
import { Checkmark } from 'react-checkmark';
import { useHistory } from 'react-router-dom';
import navbarLogo from '../assets/navbarLogo.png';
import "../styles.css";
export default function FourthPage() {
    const history = useHistory();
  const home = () => {
      history.push("/");
  }
        return (
            <div>
                 <img className='center' src={navbarLogo } />
                <Checkmark color='#664de5' size='large'/><br></br><br></br>
                <div>
                <h3 className='headline'>Congratulations, Eren!</h3>
                <h3 className='text'>You have completed onboarding, you can start using the Eden!</h3>
                </div>
                <div className='center'>
            <button className='bottom' type="submit" onClick={home} style={{display:'flex'}}>
             Launch Eden
            </button>
            </div>
            </div>
        );
    }


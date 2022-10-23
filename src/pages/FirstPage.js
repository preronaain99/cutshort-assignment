import React from 'react';
import { useNavigate } from "react-router-dom";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SecondPage from './SecondPage';
import navbarLogo from '../assets/navbarLogo.png';
import { useForm } from "react-hook-form";
export default function FirstPage() {
    return (
    <div>
        <div>
        <img className='center' src={navbarLogo } />

        <h3 className='headline'>Welcome! First things first...</h3>
        <h3 className='text'>You can always change them later</h3>
        </div>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <label className='form'>Full Name</label>
            <input
              type="text"
              className="form"
              placeholder="Steve Jobs"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label className='form'>Display Name</label>
            <input
              type="text"
              className="form"
              placeholder="Steve"
              required
            />
          </div>
          <div className="form-group mt-3">
            <button style={{outline: 'none'}} type="submit" className="bottom">
             Create Workspace
            </button>
          </div>
        </div>
      </form>
    </div>
</div>
    )
}
import React from 'react';
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import navbarLogo from '../assets/navbarLogo.png';
import { useHistory } from "react-router-dom";
export default function FirstPage() {
  const history = useHistory();

  const secondPage = () => {
    history.push("/second")
  };
  return (
    <div>
      <div >
        <img className='center' src={navbarLogo} alt='logo' /><br /><br />
        <div className='root'>
          <div className='circle'>1</div>
          <div className='line' ></div>
          <div className='circle-child'>2</div>
          <div className='line' style={{ background: '#b5c2ce' }}></div>
          <div className='circle-child'>3</div>
          <div className='line' style={{ background: '#b5c2ce' }}></div>
          <div className='circle-child'>4</div>
        </div><br /><br /><br />
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
                required={true}
              />
            </div>
            <div className="form-group mt-3">
              <label className='form'>Display Name</label>
              <input
                type="text"
                className="form"
                placeholder="Steve"
                required={true}
              />
            </div>

            <button className='bottom' type='submit' onClick={secondPage} >
              Create Workspace
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}
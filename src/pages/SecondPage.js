import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import navbarLogo from '../assets/navbarLogo.png';
import { useForm } from "react-hook-form";
export default function SecondPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      }
    return (
    <div>
        <div>
        <img className='center' src={navbarLogo } />

        <h3 className='headline'>Let's set up a home for all your work</h3>
        <h3 className='text'>You can always create another workspace later.</h3>
        </div>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <label className='form'>Workspace Name</label>
            <input
              type="text"
              className="form"
              placeholder="Eden"
              required
            />
            {errors.fullName && <p>Enter your full Name</p>}
          </div>
          <div className="form-group mt-3">
            <label className='form'>Workspace URL</label><label color='grey'>(Optional)</label>
            <input
              type="text"
              className="form"
              placeholder="Steve"
              required
            />
            {errors.displayName && <p>Enter your display Name</p>}
          </div>
          <div className="form-group mt-3">
            <button style={{outline: 'none'}} type="submit" className="bottom" onSubmit={handleSubmit(onSubmit)}>
             Create Workspace
            </button>
            {/* <Routes>
                <Route path="/secondPage" element={<SecondPage />} />
            </Routes> */}
          </div>
        </div>
      </form>
    </div>
</div>
    )
}
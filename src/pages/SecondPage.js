import React from 'react';
import { useHistory } from 'react-router-dom';
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import navbarLogo from '../assets/navbarLogo.png';
export default function SecondPage() {
    const history = useHistory();
    const thirdPage = () => {
        history.push("/third");
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
              required="true"
            />
          </div>
          <div className="form-group mt-3">
            <label className='form'>Workspace URL</label><label color='grey'>(Optional)</label>
            <input
              type="text"
              className="form"
              placeholder="Steve"
            />
          </div>
          <div className="form-group mt-3">
            <button style={{outline: 'none'}} type="submit" className="bottom" onClick={thirdPage}>
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

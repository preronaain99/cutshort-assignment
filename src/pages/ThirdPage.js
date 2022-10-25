import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import userLogo from '../assets/userLogo.png';
import groupLogo from '../assets/groupLogo.png'
import Typography from "@material-ui/core/Typography";
import "../styles.css";
import navbarLogo from '../assets/navbarLogo.png';
export default function ThirdPage() {
  const history = useHistory();
  const fourthPage = () => {
    history.push("/fourth");
  }
  return (
    <div>
      <img className='center' src={navbarLogo} alt='logo' /><br></br>
      <div className='root'>
        <div className='circle'>1</div>
        <div className='line' style={{ background: '#664de5' }}></div>
        <div className='circle'>2</div>
        <div className='line' style={{ background: '#664de5' }}></div>
        <div className='circle'>3</div>
        <div className='line'></div>
        <div className='circle-child'>4</div>
      </div><br /><br /><br />
      <h3 className='headline'>How are you planning to use Eden?</h3>
      <h3 className='text'>We'll streamline your setup experience accordingly.</h3>
      <br />
      <div className="flex-container">
        <Card className="flex-child" sx={{ minWidth: 275 }}
          style={{
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <img
              src={userLogo}
              alt="user"
              className="cardImage"
            />
            <Typography variant="h5" component="h3">
              For myself
            </Typography><br />
            <Typography
              style={{
                marginBottom: 8,
              }}
              color="textSecondary"
            >
              Write Better.Think<br />
              more clearly.Stay<br></br>
              organized.
            </Typography>
          </CardContent>
        </Card>
        <Card className="flex-child" sx={{ minWidth: 27 }}>
          <CardContent>
            <img
              src={groupLogo}
              alt="group"
              className="cardImage"
            />
            <Typography variant="h5" component="h3">
              With my team
            </Typography><br />
            <Typography
              style={{
                marginBottom: 8,
              }}
              color="textSecondary"
            >
              Wikis, docs, tasks &<br />
              projects, all in one<br></br>
              place.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="center">
        <button className="bottom" onClick={fourthPage}>
          Create Workspace
        </button>
      </div>
    </div>
  );
}
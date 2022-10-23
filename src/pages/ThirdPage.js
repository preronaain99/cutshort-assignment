import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import navbarLogo from '../assets/navbarLogo.png';
export default function ThirdPage() {
  return (
    <div>
        <img className='center' src={navbarLogo } /><br></br>
        <h3 className='headline'>How are you planning to use Eden?</h3>
        <h3 className='text'>We'll streamline your setup experience accordingly.</h3>
        <div className="card">
      <Card
        style={{
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            For myself
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Write Better.Think<br></br>
            more clearly.Stay<br></br>
            organized.
          </Typography>
        </CardContent>
      </Card>
      </div>
      <div className="form-group mt-3">
            <button style={{outline: 'none'}} type="submit" className="bottom">
             Create Workspace
            </button>
      </div>
    </div>
  );
}
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "../../Utils/images/login.png";

import AuthContext from "../../Components/Context/AuthContext";

import './style.css';

function Login() {
  const {isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

const handleSignup = (event) => {
  navigate("/register");
};

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('https://my-json-server.typicode.com/SajaRa20/mockread-api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
  
      if (response.ok) {
        console.log(isAuth)
        setIsAuth(true);
        navigate("/");
      } else {
      }
    } catch (error) {
      setError(err.response ? err.response.data.message : err.errors[0]);
    }
  };

  return (
<Container maxWidth="lg" className="divlogin">
  <Grid container justify="center" alignItems="center" spacing={12} paddingTop='2em'>
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <CardMedia
      className="imglogin"
        component="img"
        image={image}
      />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <article>
        <Typography variant="h2"> Sign In</Typography>
              <FormControl defaultValue="" className="formlogin" required  >
            <TextField
            className="lablelogin"
              id="outlined-basic"
              label="Enter user name..."
              variant="outlined"
              onChange={handleName}
              value={name}
            />
            <br />
            <br />
            <TextField
             className="lablelogin"
              type="password"
              id="outlined-basic"
              label="Enter Password..."
              variant="outlined"
              onChange={handlePassword}
              value={password}
            />
            <Button
             onClick={handleSubmit}
              sx={{
                marginTop:'2.5em',
                color: "white",
                bgcolor: "#EB9235",
                fontSize:'20px',
                fontWeight: "300",
               "&:hover": {
                  backgroundColor: "#EB9235",
                 color: "white",
                 },
               }}
             >
              Sign in
            </Button>
            <Typography variant="p" className="Account">  You donts have Account?<span onClick={handleSignup}> Signup here</span></Typography>
          </FormControl>
      </article>
    </Grid>
  </Grid>
</Container>
  );
}

export default Login;

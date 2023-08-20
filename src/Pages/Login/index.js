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

import styles from './style';

function Login() {
  const {isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

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
<styles.Container maxWidth="lg">
  <Grid container justify="center" alignItems="center" spacing={5} paddingTop='10em'>
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <CardMedia
        component="img"
        height="504"
        image={image}
      />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <styles.article>
        <Typography variant="h2"> Sign In</Typography>
              <FormControl defaultValue="" required>
            <TextField
              id="outlined-basic"
              label="Enter user name..."
              variant="outlined"
              onChange={handleName}
              value={name}
            />
            <br />
            <TextField
              type="password"
              id="outlined-basic"
              label="Enter Password..."
              variant="outlined"
              onChange={handlePassword}
              value={password}
            />
              <br />
            <Button
             onClick={handleSubmit}
              className="btn"
              sx={{
                marginRight: 2,
                color: "white",
                bgcolor: "#EB9235",
                fontWeight: "500",
               "&:hover": {
                  backgroundColor: "#EB9235",
                 color: "white",
                 },
               }}
             >
              Sign in
            </Button>
          </FormControl>
      </styles.article>
    </Grid>
  </Grid>
</styles.Container>
  );
}

export default Login;

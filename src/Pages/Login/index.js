import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import image from "../../Utils/images/login.png";

import AuthContext from "../../Components/Context/AuthContext";
import "./style.css";

function Login() {

  const { setIsAuth } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");



  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
  
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardMedia component="img" height="504" image={image} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h2">Login </Typography>
            <form>
              <Input
                variant="outlined"
                onChange={handleName}
                value={name}
                type="text"
                label="name"
                required
              />
              <Input
                type="password"
                variant="outlined"
                onChange={handlePassword}
                value={password}
                label="Password"
                required
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
              </Button>
            </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

import CardContainer from "../../Components/CardContainer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton  from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import "./style.css";

function Landing() {
  const [houses, setHouses] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Fetch houses data from the API
    fetch("https://my-json-server.typicode.com/SajaRa20/mockread-api/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const priceThreshold = 300;

    // Filter best seller houses based on criteria
    const filteredHouses = houses.filter(
      (house) => house.price < priceThreshold
    );
    filteredHouses.length = 6;
    houses.length = 3;
    setBestSellers(filteredHouses);
  }, [houses]);

  return (
    <>
      <Box  className="header" sx={{ width: '100%'}}>
        <div className="divhero">
          <Typography variant="h4" className="herotext">
            Find the most suitable property for you.
          </Typography>
          <Typography variant="h4" className="herotext">
            You have the opportunity to list your property.
          </Typography>
          <div className="searchBox">
          <Container>
          <TextField fullWidth  id="fullWidth" 
                variant="outlined"
                defaultValue="How can we help"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
                className="custom-textfield"
              />
    </Container>
        </div>
        </div>
      </Box >
      <Container maxWidth="lg" className="root">
        <div className="housesSection">
          <Typography variant="h4" className="sectionTitle">
            Best Sellers House
          </Typography>
          <CardContainer houses={bestSellers} />
        </div>

        <div className="housesSection">
          <Typography variant="h4" className="sectionTitle">
            Newest House
          </Typography>
          <CardContainer houses={houses} />
        </div>
      </Container>
    </>
  );
}

export default Landing;

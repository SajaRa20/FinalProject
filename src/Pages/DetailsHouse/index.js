import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import   Grid  from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import LocationOnRoundedIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/Email';
import PhoneRoundedIcon from '@mui/icons-material/LocalPhone';

import Add from '@mui/icons-material/Add';

import Button from '@mui/material/Button';

import { fakeImage } from '../../Utils/staticData';

import Loading from '../../Components/Loading';







function DetailsHouse() {

  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/SajaRa20/mockread-api/houses/${id}`
        );

        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const houseData = await response.json();
        setHouse(houseData);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchHouse();
  }, [id]);

  
  return (
    <Container maxWidth="lg" className="root">
          <Grid container>
            <Grid xs="12" sm="12" md="6" lg="6" className="imgSection">
              <div className="imageBox">
                  <img src={house.image || fakeImage} alt="house" />
              </div>
            </Grid>
            <Grid xs="12" sm="12" md="6" lg="6" className="desc">
              <Typography variant="h2">{house.title}</Typography>
              <Typography className="priceDetails">
                <span>${house.price} pm</span>
                <span>
                  <LocationOnRoundedIcon />
                  <Typography>{house.location}</Typography>
                </span>
              </Typography>
              <Typography>house type : {house.category}</Typography>

              <Typography className="descDetails">
                {house.description}
              </Typography>
              <Typography>room : {house.room_num}</Typography>
              <Typography>bathroom : {house.bathroom_num}</Typography>

              <div className="descAddress">
                <Typography>
                  <AccountCircleIcon />
                  {house.location_id}
                </Typography>
                <Typography>
                  <EmailRoundedIcon />
                  {house.email}
                </Typography>
                <Typography>
                  <PhoneRoundedIcon />
                  {house.mobile}
                </Typography>
              </div>
              <div className="descBtn">
                  <Button
                    variant="contained"
                    color="primary"
                    className="favriteBtn"
                    // onClick={addToFavorite}
                  >
                  </Button>
              </div>
            </Grid>
          </Grid>
    </Container>
  );
}

export default DetailsHouse;



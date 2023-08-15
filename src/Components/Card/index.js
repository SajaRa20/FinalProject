import React, { useState } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BathroomIcon from "@mui/icons-material/Bathroom";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { HOUSES } from '../../Utils/routes.constant';
import "./style.css";


export default function CardComponent({ house }) {
  const {
    id,
    image,
    title,
    description,
    category,
    city,
    price,
    bedroom,
    bathroom,
  } = house;

  const [isFavorite, setIsFavorite] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const addToFavorite = async (id) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/SajaRa20/mockread-api/houses/${id}`
    );
    const item = await response.json();
    fetch(
      "https://my-json-server.typicode.com/SajaRa20/mockread-api/favorites",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("House added to favorites");
          setIsFavorite(true);
          setOpenSnackbar(true);
        } else {
          console.error("Failed to add to favorites");
        }
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Card elevation="0" className="card">
      <CardActionArea>
        <CardMedia className="media">
          <img src={image} alt="house" />
        </CardMedia>
        <CardContent>
          <div className="cardTitle">
            <Typography gutterBottom variant="h5" component="h2">
              {title.slice(0, 1).toUpperCase() + title.slice(1)}
            </Typography>
            <Typography className="location">
              <LocationOnIcon className="icon" />
              {city}
            </Typography>
          </div>
          <Typography variant="p" component="p" className="description">
            {description.split(" ").splice(0, 10).join(" ")}
          </Typography>
          <div>
            <Typography variant="h6" component="h6" className="houseType">
              House Type:
              <span className="blueText">
                {category.slice(0, 1).toUpperCase() + category.slice(1)}
              </span>
            </Typography>
          </div>
          <div className="cardDetails">
           <div className="oneiconBox">
           <div className="iconBox">
            <LocalHotelIcon className="icon" />
              <Typography>{bedroom} bd </Typography>
            </div>
            <div className="iconBox">
            <BathroomIcon className="icon" />
              <Typography>{bathroom} ba </Typography>
            </div>
           </div>
            <Typography variant="h6">${price}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction" >
      <Link to={`${HOUSES}/${id}`} sx={{ bgcolor: '#EB9235',color:"white",fontWeight:'500' }} className="detailsLink">
          more details
        </Link>
        <>
          <Button>
            {isFavorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon className="favorite" onClick={() => addToFavorite(id)} />
            )}
          </Button>
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          House added to favorites successfully!
        </Alert>
      </Snackbar>
        </>
      </CardActions>
    </Card>
  );
}



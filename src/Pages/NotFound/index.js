import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import image from '../../Utils/images/notfound.png'
import theme from '../../App/theme';
import { Link } from "react-router-dom";
import { HOME_PAGE } from '../../Utils/routes.constant';
 import styles from './style';


function NotFound() {
  return (
<styles.Container maxWidth="lg">
  <Grid container justify="center" alignItems="center" spacing={5}>
    <Grid item xs={12} sm={12} md={6} lg={12}>
      <CardMedia
        component="img"
        height="504"
        image={image}
      />
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={12}>
      <styles.article theme={theme}>
        <Typography variant="h2">Page is Not Found</Typography>
        <Link to={HOME_PAGE} sx={{ bgcolor: '#EB9235',color:"white",fontWeight:'500' }} className="detailsLink">
        Go To Home
        </Link>
      </styles.article>
    </Grid>
  </Grid>
</styles.Container>

  );
}

export default NotFound;



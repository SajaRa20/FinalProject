// /* import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   .root{
//     display: flex;
//     flexFlow: row nowrap;
//     justifyContent:flex-start;
//     boxSizing: border-box;
//     margin: auto;
//     width: 1000px;
//     minHeight: 100vh;
//   }



//   .logo{
//     width: 400px;
//   }

//   .formSection{
//     justifySelf: flex-end;
//     minWidth: 50%;
//     marginTop: 80px;
//   }

//   .header{
//     marginBottom: 20px;
//     marginTop: 20;
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   form: {
//     display: 'flex',
//     flexFlow: 'row wrap',
//     justifyContent: 'flex-start',
//   },
//   input: {
//     width: 500,
//     marginBottom: 30,
//   },
//   button: {
//     width: 500,
//     marginBottom: 60,
//     marginTop: 20,
//   },
//   alert: {
//     width: 500,
//     height: 50,
//   },
// });
// export default useStyles; */

// .divlogin{
//   padding-block: 5em;
//   padding-inline: 2em;
//   width: 85%;
//   min-height: 600px;
// }

// .imglogin{
//   padding-top: 4em;
//   align-self: center;
//   min-width: 50%;
//   border-radius: 25px;
// }


// .formSection{
//   min-width: 50%;
//   padding-inline: 5em;

// }

import { styled } from "@mui/material/styles";

const styles = {
  Container: styled("Container")({
    paddingBlock: "5em",
    paddingInline: "2em",
    width: "85%",
    minHeight: "600px",
  }),
  imageContainer: styled("Grid")({
    display: 'flex',
    alignItems: 'center',
    '& img': {
      maxWidth: '100%',
    },
  }),
  article: styled("article")(({ theme }) => ({
    paddingInline: '5em',
    '& h2': {
      textAlign:'center',
      fontSize: '2em',
      fontWeight: 'bold',
      paddingBlock: '0.5em',
      color: theme.palette.main
    },
    '& p': {
      fontSize: '1.4em',
      color: theme.palette.text
    },
  })),
};



export default styles;

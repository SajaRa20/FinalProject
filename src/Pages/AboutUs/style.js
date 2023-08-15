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

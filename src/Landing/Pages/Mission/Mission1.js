import React from 'react';
import {Grid, makeStyles, Button} from '@material-ui/core';
import Burbujas from '../../../assets/burbujas.svg';
import Charity from '../../../assets/charity.svg'
require('typeface-m-plus-rounded-1c');

const useStyles = makeStyles((theme) => ({
    banner: {
    backgroundImage: `url(${Burbujas})`,
    backgroundRepeat: "no-repeat",
    maxWidth: "92%",
    marginLeft:"10%"
  }
}));

export default function Mission1(props){
  const classes = useStyles();
  const theme = props.theme;
  return(
    <Grid container spacing={2} className = {classes.banner}  style={{marginRight:"6%"}} >
      <Grid item xs={6} >
                <h2 style={{ color: theme.dark, textAlign: "left", marginTop:"5%", marginLeft: "2.5%", fontSize: "1.75em"}}>
                Gestionamos tus alimentos próximos a vencer en los supermercados y les damos un final <br/> feliz
                </h2>
                <p style={{color: theme.secondaryText, fontSize: "1.25em", 
                fontFamily: "Rounded Mplus 1c",
                textAlign: "left", marginTop: "8%", lineHeight: "170%", marginLeft: "2.5%"}}>
                  Entregándolos <span style={{fontWeight: "bold"}}>DIRECTAMENTE</span> a quienes más lo necesitan,
                  ¡sin más intermediarios!
                </p>
                <Button size="large" variant="contained" style={{backgroundColor: theme.highlight, color: "#F2E4D4",
                textAlign: "center", width: "40%",  height: "12%", fontSize: "20px", fontFamily: "Rounded Mplus 1c", 
                borderRadius: 15, fontWeight: "bold", marginTop: "5%", marginLeft: "-20%"}} >¡Prueba Ahora!
                </Button>
      </Grid>
      <Grid item xs={6} >
      <img src={Charity} alt="charity" style={{width: "65%", marginLeft: "-10%"}} />
      </Grid>
    </Grid>
  );
}
import React from 'react';
import {Grid, makeStyles, Button} from '@material-ui/core';
import Mancha2 from '../../../assets/mancha2.svg';
import Sostenibilidad from '../../../assets/sostenibilidad.svg'
require('typeface-m-plus-rounded-1c');

const useStyles = makeStyles((theme) => ({
    banner: {
    backgroundImage: `url(${Mancha2})`,
    backgroundRepeat: "no-repeat",
    maxWidth: "100%"
  }
}));

export default function Mission2(props){
    const classes = useStyles();
    const theme = props.theme;
    return(
    <Grid container spacing={2} className = {classes.banner} style={{marginTop:"3%"}} >
        <Grid item xs={6} >
                <h1 style={{ color: theme.dark, textAlign: "left", marginTop:"5%", marginLeft: "15%"}}>
                ¡Ayudando a tu eficiencia y sostenibilidad!
                </h1>
                <p style={{color: theme.secondaryText, fontSize: "1.8em", 
                fontFamily: "Rounded Mplus 1c",
                textAlign: "left", marginTop: "7%", lineHeight: "170%", marginLeft: "15%"}}>
                ¿Qué mejor que ayudar a erradicar la <span style={{fontWeight: "bold"}}> hambruna mundial </span> 
                mientras ahorras <span style={{fontWeight: "bold"}}>costos</span> y te vuelves más <span style={{fontWeight: "bold"}}>sostenible</span>?
                </p>
                <Button size="large" variant="contained" style={{backgroundColor: theme.highlight, color: "#F2E4D4",
                textAlign: "center", width: "40%",  height: "12%", fontSize: "30px", fontFamily: "Rounded Mplus 1c", 
                borderRadius: 15, fontWeight: "bold", marginTop: "5%"}} >¡Prueba Ahora!
                </Button>
        </Grid>
        <Grid item xs={6} >
            <img src={Sostenibilidad} alt="sostenibilidad" style={{width: "80%", marginLeft: "-10%"}} />
        </Grid>
    </Grid>);
}
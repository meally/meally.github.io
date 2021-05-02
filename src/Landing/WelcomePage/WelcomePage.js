import React from 'react';
import './WelcomePage.css';
import {Grid, makeStyles, Button} from '@material-ui/core';
import Mancha from '../../assets/mancha.svg'
import Engranajes from '../../assets/engranajes.svg'
require('typeface-m-plus-rounded-1c');

const useStyles = makeStyles((theme) => ({
    banner: {
    backgroundImage: `url(${Mancha})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top",
    maxWidth: "92%",
    marginRight: "15%",
  }
}));

export default function WelcomePage(props){
    const classes = useStyles();
    const theme = props.theme;
    return(
    <div className="container">
        <Grid container spacing={2} className = {classes.banner}  style={{marginRight:"6%", marginRight:"15%"}} >
            <Grid item item xs={12}>
                <h1 className ="UVP" style={{ color: theme.highlight, textAlign: "right"}}>¡Calmamos el hambre y ayudamos al planeta mientras <br/>le ahorramos dinero a las empresas!</h1>
            </Grid>
            <Grid item xs={6} style={{marginTop: "-7%", marginRight:"-15%", marginLeft: "12%"}}>
                <img src={Engranajes} alt="engranajes" />
            </Grid>
            <Grid item xs={6} style={{marginTop: "-1.5%"}} >
                <h1 className="Motivacion" style={{ color: theme.secondaryText, textAlign: "center", marginLeft: "35%" }}>¡No!
                <span style={{ color: theme.text, textAlign: "center" }}> deseches los alimentos próximos a vencer! Meal.ly gestiona
                su entrega desde los </span><span style={{ color: theme.light, textAlign: "center" }}>supermercados </span>
                <span style={{fontWeight: "bold"}}>directamente </span><span style={{ color: theme.text, textAlign: "center" }}>a quienes </span>
                <span style={{ color: theme.light, textAlign: "center" }}>más lo necesitan.</span>
                </h1>
                <Button className="CallToAction" size="large" variant="contained" 
                style={{backgroundColor: theme.highlight, color: "#F2E4D4",
                textAlign: "center", marginLeft: "35%", width: "40%", 
                height: "15%", fontSize: "30px", fontFamily: "Rounded Mplus 1c", borderRadius: 15, fontWeight: "bold"}} >
                ¡Prueba Ahora!
                </Button>
            </Grid>
            <Grid item item xs={12}>
                <h1  style={{ color: theme.dark, textAlign: "center", marginLeft: "15%"}}>
                Le damos una segunda oportunidad a tus alimentos próximos a vencer:<br/> ¡sin riesgo reputacional, a bajo costo y con alto impacto!</h1>
            </Grid>
        </Grid>
    </div>);
}



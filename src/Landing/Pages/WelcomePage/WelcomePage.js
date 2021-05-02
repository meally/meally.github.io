import React from 'react';
import './WelcomePage.css';
import {Grid, makeStyles} from '@material-ui/core';
import Mancha from '../../../assets/mancha.svg'
import Engranajes from '../../../assets/engranajes.svg'
import BotonPruebaAhora from '../../Components/BotonPruebaAhora.js'
import Mission1 from '../Mission/Mission1.js'
import Mission2 from '../Mission/Mission2.js'
import Mission3 from '../Mission/Mission3.js'
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
        <Grid container spacing={2} className = {classes.banner}  style={{marginRight:"6%"}} >
            <Grid item xs={12}>
                <h1 className ="UVP" style={{ color: theme.highlight, textAlign: "right"}}>¡Calmamos el hambre y ayudamos al planeta mientras <br/>le ahorramos dinero a las empresas!</h1>
            </Grid>
            <Grid item xs={6} style={{marginTop: "-7.5%", marginRight:"-15%", marginLeft: "12.5%"}}>
                <img src={Engranajes} alt="engranajes" style={{width: "120%"}}/>
            </Grid>
            <Grid item xs={6} style={{marginTop: "-1.5%"}} >
                <h2 className="Motivacion" style={{ color: theme.secondaryText, textAlign: "center", marginLeft: "35%" }}>¡No!
                <span style={{ color: theme.text, textAlign: "center" }}> deseches los alimentos próximos a vencer! Meal.ly gestiona
                su entrega desde los </span><span style={{ color: theme.light, textAlign: "center" }}>supermercados </span>
                <span style={{fontWeight: "bold"}}>directamente </span><span style={{ color: theme.text, textAlign: "center" }}>a quienes </span>
                <span style={{ color: theme.light, textAlign: "center" }}>más lo necesitan.</span>
                </h2>
                <BotonPruebaAhora theme={theme} />
            </Grid>
            <Grid item xs={12}>
                <h1 className="FraseMotivacional" style={{ color: theme.dark, textAlign: "center", marginLeft: "15%"}}>
                Le damos una segunda oportunidad a tus alimentos próximos a vencer:<br/> ¡sin riesgo reputacional, a bajo costo y con alto impacto!</h1>
            </Grid>
        </Grid>
        <Mission1 theme={theme}/>
        <Mission2 theme={theme}/>
        <Mission3 theme={theme}/>
        <Grid item xs={12}>
                <h1 className ="FraseFinal" style={{ color: theme.highlight, textAlign: "center"}}>Meal.ly: No sólo es mejor para ti, ¡es mejor para 
                <span style={{color: "#EFB623"}}> Col</span><span style={{color: "#23A6EF"}}>omb</span>ia! </h1>
        </Grid>

    </div>);
}



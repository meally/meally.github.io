import React from 'react';
import {Grid, Button} from '@material-ui/core';
import Savings from '../../../assets/savings.svg';
require('typeface-m-plus-rounded-1c');



export default function Mission2(props){
    const theme = props.theme;
    return(
    <Grid container spacing={2} >
        <Grid item xs={6} >
            <img src={Savings} alt="savings" style={{width: "45%", marginLeft: "-5%"}} />
        </Grid>
        <Grid item xs={6} >
            <h2 style={{ color: theme.dark, textAlign: "right", marginTop:"5%", marginRight: "15%", marginLeft: "-30%", fontSize: "1.75em"}}>
            Permitiéndote generar ahorros y beneficios tributarios
            </h2>
            <p style={{color: theme.secondaryText, fontSize: "1.25em", 
                fontFamily: "Rounded Mplus 1c",
                textAlign: "right", marginTop: "8%", marginRight: "15%", lineHeight: "170%"}}>
                ¡Ya no tendrás que preocuparte por el costo logístico de desechar 
                <span style={{fontWeight: "bold"}}> alimentos aptos para el consumo humano! </span> 
                Además, ¡generarás beneficios tributarios por las donaciones hechas a Meal.ly!
                </p>
            <Button href="/#contactanos" size="large" variant="contained" style={{backgroundColor: theme.highlight, color: "#F2E4D4",
            textAlign: "center", width: "38%",  height: "13%", fontSize: "20px", fontFamily: "Rounded Mplus 1c", 
            borderRadius: 15, fontWeight: "bold", marginTop: "5%", marginLeft: "-10%"}} >¡Prueba Ahora!
            </Button>
        </Grid>
    </Grid>);
}
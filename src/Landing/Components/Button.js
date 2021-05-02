import React from 'react';
import {Button} from '@material-ui/core';



export default function BotonPruebaAhora(props){
    const theme = props.theme;
    return(<Button size="large" variant="contained" style={{backgroundColor: theme.highlight, color: "#F2E4D4",
    textAlign: "center", marginLeft: "35%", width: "40%", 
    height: "15%", fontSize: "30px", fontFamily: "Rounded Mplus 1c", borderRadius: 15, fontWeight: "bold"}} >
    ¡Prueba Ahora!
    </Button>)

}
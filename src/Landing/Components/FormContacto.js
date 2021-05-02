import React from 'react';
import {useMediaQuery,useTheme} from '@material-ui/core'


export default function FormContacto(props) {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));
    return ( 
    <div >
        <iframe title={props.title} src={props.src} height={props.height} width={props.width} 
        style={isMobileOrTablet ? {border:"none", maxWidth:"100%", maxHeight:"100%"} : 
        {border:"none", maxWidth:"100%", maxHeight:"100%", marginTop:"-10%"}} 
        allowFullScreen={true}
        />      
    </div>
    );
  }


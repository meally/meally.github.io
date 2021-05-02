import React from 'react';
import FormContacto from '../../Components/FormContacto.js'
require('typeface-m-plus-rounded-1c');



export default function Contacto(props){
  return(
    <FormContacto
    src={"https://docs.google.com/forms/d/e/1FAIpQLSem6L1OjOy2vefJmRp-R4nk8Hf7AQBwemVuVBCsS-vsB7T5Tw/viewform?embedded=true"}
     height={"1200px"} width={"100%"} title={"Contacto Meal.ly empresas"} />
  );
}
import logo from './assets/logo.svg';
import './App.css';
import { chosenTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import WelcomePage from './Landing/Pages/WelcomePage/WelcomePage.js';
import Contacto from './Landing/Pages/Contacto/Contacto.js'
import { Route, Switch, HashRouter } from "react-router-dom";
require('typeface-m-plus-rounded-1c');

function App() {
  return (
    
    <HashRouter basename="/">
    <div className="App">
    <Switch>
    <ThemeProvider  theme={chosenTheme}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/" exact 
          component={(props) => <WelcomePage theme={chosenTheme} />}/>
          <Route path="/contactanos" exact 
          component={(props) => <Contacto theme={chosenTheme} />}/>
    </ThemeProvider>
    </Switch>
    </div>
    </HashRouter>
  );
}


export default App;


            
         
import logo from './assets/logo.svg';
import './App.css';
import { chosenTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import WelcomePage from './Landing/WelcomePage/WelcomePage.js';
require('typeface-m-plus-rounded-1c');

function App() {
  return (
    <ThemeProvider  theme={chosenTheme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomePage theme={chosenTheme}/>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle } from "styled-components";
import 'normalize.css'
import Home from './pages/home/homePage-Component'


function App() {
  return (

    <div className="App">
      <GlobalStyle/>
      <Home/>
    </div>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
 :root{
    box-sizing:inherit;
    font-size: 16px;
    --font-primary :'Raleway', sans-serif;
    --primary-ccolor: #FF385C;
    --text-color-dark: #22222;
    --light-grey :#DDDDDD;
 }

 *,*::before, *::after{
  box-sizing: inherit;
 }

 body{
  font-family: var(--font-primary);
 }



`

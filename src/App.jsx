import { createGlobalStyle } from "styled-components";
import 'normalize.css'
import Home from './pages/home/homePage-Component'
import { Routes,Route } from "react-router-dom";


function App() {
  return (

    <div className="App">
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
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
    --text-color-dark:#222222;
    --text-color-light:#717171;
    --box-shadow:#d1d0d0;
    --light-grey :#DDDDDD;
 }

 *,*::before, *::after{
  box-sizing: inherit;
 }

 body{
  font-family: var(--font-primary);
  color: var(--text-color-light);
 }

 /* *{
  border:1px solid red;
 } */



`

import { createGlobalStyle } from "styled-components";
import 'normalize.css'
import Home from './pages/home/homePage-Component'
import { Routes,Route } from "react-router-dom";
import SignUpSignIn from "./components/signupandLogin/signup";
import FooterSmallComponent from "./components/FooterSmall/footerSmallComponent";



function App() {
  return (

     <div className="App">
      <GlobalStyle/>
      <Routes>
         <Route path="/" element={<FooterSmallComponent/>}>
              <Route index element = {<Home/>}/>
              <Route path="/register" element={<SignUpSignIn/>} />
         </Route>
      </Routes>
    </div>
  
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
 :root{
    box-sizing:border-box;
    font-size: 16px;
    --font-primary :'Raleway', sans-serif;
    --primary-ccolor: #FF385C;
    --text-color-dark:#222222;
    --text-color-light:#717171;
    --box-shadow:#d1d0d0;
    --light-grey :#DDDDDD;
    --box-shadow-hover: 0px 5px 5px -3px  #bbbbbb;
    --background-hover:#e8e8e8;
 }

 *,*::before, *::after{
  box-sizing: inherit;
 }

 body{
  font-family: var(--font-primary);
  color: var(--text-color-light);
  padding: 0;
  margin: 0;
 }

 *{
   -webkit-tap-highlight-color: transparent !important;
 }


 /* *{
  border: 1px solid red;
 } */



`

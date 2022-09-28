
import Footer from "../../components/Footer/footerComponent"
import FooterSmallComponent from "../../components/FooterSmall/footerSmallComponent"
import Header from "../../components/Header/headerComponent"
import HomeComponent from "../../components/Homes/homeComponent"
import ImageSlider from "../../components/imageSlider/imageslider"
import SignUpSignIn from "../../components/signupandLogin/signup"
import Slider from "../../components/Slider/slider"
import { Routes,Route, Outlet } from "react-router-dom";
import SearchPop from "../../components/SearchPop/Searchpop"




const Home = ()=>{
   return (
    <>  
            {/* <Header/>
            <Slider/>
            <HomeComponent/>
            <Footer/>
            <FooterSmallComponent/> */}
            <SearchPop/>
    </>
   )
   }
   export default Home

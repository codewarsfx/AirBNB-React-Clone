
import Footer from "../../components/Footer/footerComponent"
import FooterSmallComponent from "../../components/FooterSmall/footerSmallComponent"
import Header from "../../components/Header/headerComponent"
import HomeComponent from "../../components/Homes/homeComponent"
import SignUpSignIn from "../../components/signupandLogin/signup"
import Slider from "../../components/Slider/slider"




const Home = ()=>{
   return (
    <>  
            <Header/>
            <Slider/>
            <HomeComponent/>
            <Footer/>
            {/* <FooterSmallComponent/> */}
    </>
   )
   }
   export default Home

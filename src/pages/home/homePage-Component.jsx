
import Footer from "../../components/Footer/footerComponent"
import FooterSmallComponent from "../../components/FooterSmall/footerSmallComponent"
import Header from "../../components/Header/headerComponent"
import HomeComponent from "../../components/Homes/homeComponent"

import Slider from "../../components/Slider/slider"
import SearchPop from "../../components/SearchPop/Searchpop"
import useModal from "../../Hooks/useModal"
import AnimatedModal from "../../components/animatedModal/animatedModal"
import SearchPopSmall from "../../components/SearchPopSmall/searchPopSmall"

import "./home.css"
import HomeHero from "../../components/homeDetailsHero/homeDetailsHero"
import HomeDetailsHeader from "../../components/HomeDetailsHeader/homeDetailsHeader"
import CheckoutBox from "../../components/CheckoutBox/cheackoutBox"
import ImageSlider from "../../components/imageSlider/imageslider"




const Home = ()=>{
   const {isModalopen,toggleModal} = useModal()
   return (
    <>  
            <Header toggleModal={toggleModal} />
            <Slider/>
            <HomeComponent/>
            <Footer/>
            <FooterSmallComponent/>
            <AnimatedModal 
            isModalopen={isModalopen} 
            toggleModal={toggleModal}
            component = { <SearchPop toggleModal={toggleModal}/>}/>

            <AnimatedModal
            isModalopen={isModalopen} 
            toggleModal={toggleModal}
            small
            component = { <SearchPopSmall   toggleModal={toggleModal} />}/>
           
    </>
   )
   }
   export default Home

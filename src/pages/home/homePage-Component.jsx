
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
import FixedHeader from "../../components/FixedHeaderDetails/fixedHeader"
import Review from "../../components/reviews/review"





const Home = ()=>{
   const {isModalopen,toggleModal} = useModal()
   return (
    <>  
            {/* <Header toggleModal={toggleModal} />
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
            component = { <SearchPopSmall   toggleModal={toggleModal} />}/> */}
            <Review/>
           
           
    </>
   )
   }
   export default Home

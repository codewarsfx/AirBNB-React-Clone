import { useState} from "react"
import{ AnimatePresence} from "framer-motion"
import Footer from "../../components/Footer/footerComponent"
import FooterPopUp from "../../components/FooterPop/footerPopUp"
import Header from "../../components/Header/headerComponent"
import HomeComponent from "../../components/Homes/homeComponent"
import Modal from "../../components/Modal/modalComponent"
import Slider from "../../components/Slider/slider"




const Home = ()=>{


   return (
    <>  
           <Header/>
            <Slider/>
            <HomeComponent/>

    { modalOpen &&(<Modal onClick={click}>
                    <FooterPopUp handleClose={click} />
                  </Modal>)
    }
</AnimatePresence>
            
            <Footer click={click} />
    </>

   )
   
   }

   export default Home

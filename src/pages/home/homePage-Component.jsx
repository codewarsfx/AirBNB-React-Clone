import { useRef} from "react"
import Footer from "../../components/Footer/footerComponent"
import FooterPopUp from "../../components/FooterPop/footerPopUp"
import Header from "../../components/Header/headerComponent"
import HomeComponent from "../../components/Homes/homeComponent"
import Modal from "../../components/Modal/modalComponent"
import Slider from "../../components/Slider/slider"




const Home = ()=>{

   const modalref = useRef()

   return (
    <>  
           <Header/>
            <Slider/>
            <HomeComponent/>
            <Modal ref={modalref}>
              <FooterPopUp modal={modalref}/>
            </Modal>
            <Footer modal={modalref} />
    </>

   )
   
   }

   export default Home

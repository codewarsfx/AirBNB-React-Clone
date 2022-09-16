import { useState} from "react"
import{ AnimatePresence} from "framer-motion"
import Footer from "../../components/Footer/footerComponent"
import FooterPopUp from "../../components/FooterPop/footerPopUp"
import Header from "../../components/Header/headerComponent"
import HomeComponent from "../../components/Homes/homeComponent"
import Modal from "../../components/Modal/modalComponent"
import Slider from "../../components/Slider/slider"




const Home = ()=>{

  //  const modalref = useRef()

   const [modalOpen, setModalOpen] = useState(false);


   const click =()=>{ setModalOpen(modalOpen=>!modalOpen)}

   return (
    <>  
           <Header/>
            <Slider/>
            <HomeComponent/>
            <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => null}
>
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

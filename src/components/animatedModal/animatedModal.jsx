import { AnimatePresence } from "framer-motion"

import Modal from "../Modal/modalComponent"


const AnimatedModal = ({component,isModalopen,toggleModal})=> {


    return(
        <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
                                 { isModalopen && (<Modal toggleModal={toggleModal}>
                                                        {component}
                                                 </Modal>)}                    
         </AnimatePresence>
    )

}


export default AnimatedModal
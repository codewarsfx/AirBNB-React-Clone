import { AnimatePresence } from "framer-motion"

import Modal from "../Modal/modalComponent"


const AnimatedModal = ({component,isModalopen,toggleModal,small})=> {

    return(
        <AnimatePresence

        initial={false}
        mode='wait'
        onExitComplete={() => null}>
                                 { isModalopen && (<Modal small={small} toggleModal={toggleModal}>
                                                        {component}
                                                 </Modal>)}                    
         </AnimatePresence>
    )

}



export default AnimatedModal
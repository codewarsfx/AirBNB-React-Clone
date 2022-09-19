import { AnimatePresence } from "framer-motion"

import Modal from "../Modal/modalComponent"


const AnimatedModal = ({component,showModal,click})=> {



    return(
        <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
                                 { showModal && (<Modal click={click}>
                                                        {component}
                                                    </Modal>)}
                                     
         </AnimatePresence>
    )

}


export default AnimatedModal
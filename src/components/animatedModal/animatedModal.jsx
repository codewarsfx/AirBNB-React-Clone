import { AnimatePresence } from "framer-motion"
import { useContext } from "react"



import { ModaLContext } from "../../Context/Modal/modalContext"
import Modal from "../Modal/modalComponent"


const AnimatedModal = ({component,type})=> {

    const {modalOpen} = useContext(ModaLContext)

    return(
        <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
                                 {    modalOpen && (<Modal>
                                                        {component}
                                                    </Modal>)}
                                     
         </AnimatePresence>
    )

}


export default AnimatedModal
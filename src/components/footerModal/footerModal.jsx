import { AnimatePresence } from "framer-motion"
import { useContext } from "react"



import { ModaLContext } from "../../Context/Modal/modalContext"
import FooterPopUp from "../FooterPop/footerPopUp"
import Modal from "../Modal/modalComponent"


const FooterModal = ()=> {

    const {modalOpen} = useContext(ModaLContext)

    return(
        <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
                                    { modalOpen && ( <Modal>
                                                        < FooterPopUp/>
                                                    </Modal>)
                                    }
    </AnimatePresence>
    )

}


export default FooterModal
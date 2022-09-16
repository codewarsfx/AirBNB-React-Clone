import { forwardRef, useImperativeHandle, useState } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import styled from "styled-components"


const Modal = ({children,onClick}) => {

return createPortal(
        <ModalContainer >  
            <motion.div className="overlay"
             onClick={onClick}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}/>
            <div>
                {children}
            </div>
        </ModalContainer>
       ,document.getElementById("modal"))  
}


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000000;
    .overlay{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color:rgba(0,0,0,.5);
    cursor: pointer;
    }
`









export default Modal
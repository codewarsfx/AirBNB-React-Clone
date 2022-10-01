import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import styled, {css} from "styled-components"
import { useEffect } from "react"



const Modal = ({children,toggleModal,small}) => {


useEffect(()=>{
    document.querySelector('body').classList.add('remove-scroll');

    return ()=>{
        document.querySelector('body').classList.remove('remove-scroll');
    }
},[])

return createPortal(
        <ModalContainer small={small}>  
             <ModalOverlay
             onClick={toggleModal}
             initial={{ opacity: 1,  transition: {
                duration: .1,
              }, }}
             animate={{ opacity: 1,  transition: {
                duration: .1,
              },}}
             exit={{ opacity: 1,  transition: {
                duration: .1,
              }, }}>
                     {children}
             </ModalOverlay>
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

    ${props => props.small && css`
     @media (min-width:750px){
        display: none;
     }
  `};
`

const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color:rgba(0,0,0,.5);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;



    

`









export default Modal
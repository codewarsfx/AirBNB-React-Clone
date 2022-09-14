import { forwardRef, useImperativeHandle, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { useTransition,animated } from "react-spring"


const Modal = forwardRef((props,ref) => {
    const [showModal,setShowModal] = useState(false)
    const opacity = useTransition(showModal,{
        from:{opacity:0},
        enter:{opacity:1},
        leave:{opacity:0},
        reverse:showModal
    })

    const toggleModal = ()=>{
        setShowModal(showModal=>!showModal)
    }

    useImperativeHandle(ref,()=>{
        return{
            toggle :()=>toggleModal(),
        }
    })

    if(showModal){
    return  createPortal(
        <ModalContainer >  
            <ModalOverlay onClick={toggleModal}/>
            <div>
                {props.children}
            </div>
        </ModalContainer>
       ,document.getElementById("modal"))
    }
    return null

})

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000000;
`

const ModalOverlay = styled(animated.div)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color:rgba(0,0,0,.5
);
    cursor: pointer;
`







export default Modal
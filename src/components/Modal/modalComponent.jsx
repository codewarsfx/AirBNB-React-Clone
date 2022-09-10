import { forwardRef, useImperativeHandle, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"


const Modal = forwardRef((props,ref) => {
    const [showModal,setShowModal] = useState(false)

    const closeModal = ()=>{
        setShowModal(false)
    }
    const openModal = ()=>{
        setShowModal(true)
    }


    useImperativeHandle(ref,()=>{
        return{
            close :()=>closeModal(),
            open :()=>openModal()
        }
    })

  
   


    if(showModal){
    return  createPortal(
     <ModalContainer>
        <ModalOverlay onClick={closeModal} showModal={showModal}/>
        <div>
            {props.children}
        </div>
    </ModalContainer>,document.getElementById("modal"))
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
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color:rgba(0,0,0,.5);
    opacity: 0;
    animation: fadein .3s ease-in both;
    /* animation-delay: .05s; */
    cursor: pointer;
    @keyframes fadein{
    from {
        opacity: 0;
    }
    to{
        opacity: 1;
    }
    }

`







export default Modal
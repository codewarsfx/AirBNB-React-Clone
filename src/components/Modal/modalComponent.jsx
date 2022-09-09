import { forwardRef, useImperativeHandle, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"


const Modal = forwardRef((props,ref) => {
    const [showModal,setShowModal] = useState(true)

    const closeModal = ()=>{
        setShowModal(false)
    }
    const openModal = ()=>{
        setShowModal(true)
    }


    useImperativeHandle(ref,()=>{
        return{
            close :()=>closeModal()
        }
    })

  
   


    if(showModal){
    return  createPortal(
     <ModalContainer>
        <ModalOverlay onClick={closeModal}/>
        <ModalChildren>
            {props.children}
        </ModalChildren>
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
    cursor: pointer;

`
const ModalChildren = styled.div`
    
`






export default Modal
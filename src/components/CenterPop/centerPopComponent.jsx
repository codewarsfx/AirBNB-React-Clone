

import styled from "styled-components"
import {motion} from "framer-motion"
import { useContext } from "react"
import { ModaLContext } from "../../Context/Modal/modalContext"

const CenterContainer = ()=>{

    const {click} = useContext(ModaLContext)

    const dropIn = {
        hidden: {
          y: "50vh",
          opacity: 0,
        },
        visible: {
          y: "0",
          opacity: 1,
          transition: {
            duration: .3,
          },
        },
        exit: {
          y: "50vh",
          opacity: 0,
          transition: {
            duration: .4,
          },
        },
      };


    return (
     <Container onClick={click}>
        <motion.div className="content"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
        </motion.div>
     </Container>
    )
}


const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .content {
        min-height: 81vh;
        width:80%;
        max-width: 580px;
        background-color: white;
        border-radius: 15px;
     }
`

export default CenterContainer
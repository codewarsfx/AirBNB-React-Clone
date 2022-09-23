
import styled from "styled-components"
import {motion} from "framer-motion"



const CenterContainer = ({children})=>{

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
        <Container className="content"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </Container>
    )
}


const Container = styled(motion.div) `
        min-height: 81vh;
        width:100%;
        max-width: 580px;
        background-color: white;
        border-radius: 15px;
        
     
     

`

export default CenterContainer
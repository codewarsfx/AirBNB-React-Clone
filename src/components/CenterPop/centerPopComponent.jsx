
import styled from "styled-components"
import {motion} from "framer-motion"
import SignUpSignIn from "../signupandLogin/signup";


const CenterContainer = ()=>{

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
          <SignUpSignIn/>
        </Container>
    )
}


const Container = styled(motion.div) `
        min-height: 81vh;
        width:80%;
        max-width: 580px;
        background-color: white;
        border-radius: 15px;
        position:absolute;
        top: 10%;
        left: 33%;
     

`

export default CenterContainer
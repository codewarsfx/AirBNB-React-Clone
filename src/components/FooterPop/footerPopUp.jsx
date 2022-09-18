
import styled from "styled-components"
import { motion} from "framer-motion"
import { useContext } from "react";
import { ModaLContext } from "../../Context/Modal/modalContext";


const FooterPopUp = ()=>{
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
        <FooterPopUpContainer
            className="foot"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="main">
                <Close onClick={click}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </Close>
                <NavigationContainer>
                    <Navigation>
                        <p>Support</p>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">AirCover</a></li>
                            <li><a href="#">Safety information</a></li>
                            <li><a href="#">Supporting people with disabilities</a></li>
                            <li><a href="#">Cancellation options</a></li>
                            <li><a href="#">Our COVID-19 Response</a></li>
                            <li><a href="#">Report a neighborhood concern</a></li>
                        </ul>
                    </Navigation>
                    <Navigation>
                        <p>Community</p>
                        <ul>
                            <li><a href="#">Airbnb.org: disaster relief housing</a></li>
                            <li><a href="#">Support Afghan refugees</a></li>
                            <li><a href="#">Combating discrimination</a></li>
                        </ul>
                    </Navigation>
                    <Navigation>
                        <p>Hosting</p>
                        <ul>
                            <li><a href="#">Try hosting</a></li>
                            <li><a href="#">AirCover for Hosts</a></li>
                            <li><a href="#">Explore hosting resources</a></li>
                            <li><a href="#">Visit our community forum</a></li>
                            <li><a href="#">How to host responsibly</a></li>
                        </ul>
                    </Navigation>
                    <Navigation>
                        <p>Airbnb</p>
                        <ul>
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">Learn about new features</a></li>
                            <li><a href="#">Letter from our founders</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Gift cards</a></li>
                        </ul>
                    </Navigation>
                </NavigationContainer>
            </div>
        </FooterPopUpContainer>
    )


}




const FooterPopUpContainer = styled(motion.footer)`
div {
    position: relative;
}
     position: absolute;
     top: 55vh;
     left: 0;
     border-radius: 15px;
     min-height: 46vh;
     width:100%;
     background-color:white;

`



const NavigationContainer = styled.div`
    max-width: 1300px;
    margin:50px 0;
    display: flex;
    justify-content: space-evenly;
`

const Navigation =  styled.nav`
   color: var(--text-color-dark);
   font-size: 14px;

   p{
    font-weight: 600;

   }
    
   ul {
    margin: 0;
    padding: 0;
    list-style-type:none;
    li{
            margin-top: 20px;
     }
     a{
                text-decoration: none;
                color : inherit;
                :hover{
                    text-decoration: underline;
                }
     }

   }


`


const Close =styled.span`
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    top: -10%;
    left:1%;
    cursor: pointer;
:hover { 
    background-color:#f0efef;
}

svg{
     display: block;
     fill: none;
      height: 14px; 
      width: 14px; 
      stroke:var(--text-color-dark); 
      stroke-width: 3; 
      overflow: visible;
}

`



export default FooterPopUp
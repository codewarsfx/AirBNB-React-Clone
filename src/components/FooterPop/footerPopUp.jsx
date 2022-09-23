
import styled from "styled-components"
import { motion} from "framer-motion"
import CloseIcon from "../CloseIcon/closeIcon";

const FooterPopUp = ({toggleModal})=>{


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
            <div>
                <CloseIcon click={toggleModal}/>  
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
        width: 93%;
        height: 100%;
        margin:auto;
    }
     position: absolute;
     bottom:0%;
     left: 0;
     border-radius: 15px 15px 0 0;
     padding:1em 0 2em;
     width:100%;
     background-color:white;

     @media(max-width: 750px){
        display: none;
     }
`


const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media (min-width:1150px){
        flex-direction: row;
    }
`

const Navigation =  styled.nav`
        color: var(--text-color-dark);
        font-size: 14px;

    p{
        font-weight: 600;

    }
    
   ul {
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap:15px 30px;
            border-bottom: 1px solid #ddd;
            list-style-type:none;
            margin: 0;
            padding: 20px 0;

            @media (min-width: 1150px){
             display: block;
             padding: 0;
             border-bottom: none;
     }
    }



        li{
                margin-top: 0px;
                @media (min-width: 1150px){
                        margin-top: 20px;
                    }
        }

     a  {
                text-decoration: none;
                color : inherit;
                :hover{
                    text-decoration: underline;
                }
     }
`






export default FooterPopUp
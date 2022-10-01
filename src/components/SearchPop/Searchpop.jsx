import { useState } from "react"
import styled from "styled-components"
import HeaderLogo from "../Logo/logocomponent"
import Navigation from "../Nav/NavComponent"
import SearchPopTab from "../SearchPopNav/searchpopTab"
import { motion } from "framer-motion"

const SearchPop = ()=>{


    const [isActive, setIsActive] = useState(true)


    const toggleActiveState = (e)=>{
        e.stopPropagation()
        setIsActive(isActive=>!isActive)
    }

    const dropIn = {
        hidden: {
          y:"-10vh",
          scale:0
        },
        visible: {
          y: "0vh",
          scale: 1,
          transition: {
            type: "spring",
            duration: .5,
          },
        },
        exit: {
         opacity:0,
          transition: {
            duration: .1,
          },
        },
      };
    return (
       <Container
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e)=> {
            e.stopPropagation()
            setIsActive(false)
        }}
       >
        <ContainerHeader>
            <HeaderLogo/>
            <SearchNavigation>
                <ul>
                    <li><a href="#">Stays</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Online Experiences</a></li>
                </ul>
            </SearchNavigation>
            <Navigation/>
        </ContainerHeader>
        <SearchPopTab isActive={isActive} toggleActiveState= {toggleActiveState}/>
       </Container>
    )
}

const Container = styled(motion.div)`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color:#fff;
    padding-bottom:1em ;

    @media (max-width: 750px){


    display: none;


}
    
`

const ContainerHeader = styled.div`
   max-width: 1300px;
   width: 95%;
   margin: 20px auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const SearchNavigation = styled.nav`
   width: 30%;
   /* margin-left: 210px; */
    

    ul{
        margin: 0;
        padding:0;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    li{
        list-style-type: none;


        :first-child{
            border-bottom: 2px solid var(--text-color-dark);
        }
    }


    a{
        text-decoration: none;
        color: var(--text-color-dark);
        padding: .5em 0;
        display: block;


    }
`


export default SearchPop
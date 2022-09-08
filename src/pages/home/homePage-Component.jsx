import { useEffect,useState } from "react"
import styled from "styled-components"
import Header from "../../components/Header/headerComponent"
import HomeComponent from "../../components/Homes/homeComponent"
import Slider from "../../components/Slider/slider"




const Home = ()=>{
    const [showShadow, setShowShadow] = useState(false)

    

    useEffect(()=>{

      window.addEventListener("scroll",()=>{
                    if(window.scrollY > 0){
                        console.log('hey')
                        setShowShadow(!showShadow)
                    }
                    else{
                        setShowShadow(false)
                    }
        })
    
        return window.removeEventListener("scroll",()=>{
            console.log('removed')
        })

    },[])

   return (

    <>  
    <FixedContainer showShadow={showShadow}>
            <Header/>
            <hr style={{border: '.3px solid #DDDDDD'}} />
            <Slider/>
    </FixedContainer>
            <HomeComponent/>
    </>

   )
   
   }

   const FixedContainer = styled.div`
   background-color: white;
   height: 25vh;
   width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index:10000;
    box-shadow:${({showShadow}) => showShadow ? ".5px 0px 3px #bbbbbb":""};
   `
   
   export default Home

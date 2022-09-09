import { useEffect,useState } from "react"
import styled from "styled-components"
import Header from "../../components/Header/headerComponent"
import HomeComponent from "../../components/Homes/homeComponent"
import Slider from "../../components/Slider/slider"




const Home = ()=>{

   return (
    <>  
           <Header/>
            <Slider/>
            <HomeComponent/>
    </>

   )
   
   }

   export default Home


import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import { useEffect, useState } from 'react'
import SideLink from '../SlideLink/slidelink'
import styled from "styled-components"


const Icondata =[
  {
  "icons": ["Design","Surfing","Beds","Artic","Beach","Caves","OMG!","Tropical","Castles","Tents","Cabins","Lakes"]

  },
  {
    "icons": ["Design","Beach","Caves","OMG!","Surfing","Beds","Artic","Castles","Tents","Cabins","Tropical","Castles"]
    },
   { "icons" :["Design","Surfing","Beds","Artic","Beach","Caves","OMG!","Tropical","Castles","Tents","Cabins","Lakes"]}
]


const Slider =()=>{
  const [moveby,setmoveby] = useState(0)
  const [showShadow,setShadow] = useState(false)



  //controls display of box shadow 
  useEffect(()=>{

      const boxShadowEvent = window.addEventListener("scroll",()=>{
        if (window.scrollY > 10){
          setShadow(true)
        }
        else{
          setShadow(false)
        }
      })

      return window.removeEventListener(boxShadowEvent,()=>{
        console.log("window has stopped listening for boxShadowEvent")
      })

  })


  const moveright=()=>{
      if(moveby > -200){
        setmoveby(moveby-100)
      }
    }

  const moveleft =()=>{
    if(moveby !== 0){
      setmoveby(moveby+100)
    }
  }

return (
  <MainContainer showShadow={showShadow}>
    <Container>
      <SlideContainer>
          {moveby > -200 ? <SlideArrowIconRight onClick={moveright} ><GoChevronRight/></SlideArrowIconRight> : null}
          {moveby !== 0 ? <SlideArrowIconLeft className="arrow-container arrow-left" onClick={moveleft}><GoChevronLeft/></SlideArrowIconLeft>:null} 
      <SlideContainerWindow >
          {
              Icondata.map(({icons},i)=>(
                    <SlideElementGroup key={i} style={{transform: `translateX(${moveby}%)`}}>
                          {
                            icons.map((name,i)=>(
                                <SideLink key={i} name={name}/>
                            ))
                          }
                    </SlideElementGroup>
              )
              )
          }
      </SlideContainerWindow>
      </SlideContainer>
      <FilterContainer>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display:"block", height: "14px",width: "14px",fill: "#222222"}}><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
      <span>Filters</span>
      </FilterContainer>
    </Container>
  </MainContainer>
)

}


const MainContainer = styled.div`
  padding-bottom:.5em;
  width: 100%;
  position: fixed;
  top: 84px;
  background-color:white;
  z-index:2;

  @media (max-width:750px) {
    box-shadow:0px 3px 3px -3px #d4d4d4;
  }

  @media (min-width:750px) {
    margin: 130px  0  0;
     position: sticky; 
     top: 117px;
     box-shadow: ${({ showShadow }) => showShadow ? "0px 3px 3px -3px #d4d4d4" : ""}; 
     
  }
`


const Container = styled.div`
  display:flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;

  @media (min-width:750px) {
    width:90%;
    margin:auto;
    align-items: center;
  }
`


const FilterContainer = styled.div `
  border: 1px solid var(--light-grey);
  width: 88px;
  height: 46px;
  align-items: center;
  justify-content: space-evenly;
  font-size:12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display:none;

  span{
    color: var(--text-color-dark);
  }
  &:hover{
  box-shadow: var(--box-shadow-hover);
}

@media (min-width:750px) {
  display: flex;
  }
`


const SlideContainer = styled.div`
  position: relative;
  width:100%;

  @media (min-width:750px) {
    width:83%;
  }

  @media (min-width:950px) {
    width:87%;
  }

  @media (min-width:1200px) {
    width:90%;
  }
`
const SlideContainerWindow = styled.div`
    display: flex;
    min-height: 3vh;
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    display: none;
    width: 0px;
  }

`

const SlideElementGroup = styled.div`
   display:flex;
   transition: transform .7s ease-out;
   justify-content:space-between;


   @media (min-width:950px) {
    min-width:100%;
    scroll-snap-align: center;
  }

   
`



const SlideArrowIcon  = styled.div`

  width: 26px;
  height: 26px;
  position: absolute;
  top:50%;
  margin: -15px;
  border: 1px solid var(--light-grey);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color:white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0px 0px 10px 20px rgba(255,255,255,0.9);
  display: none;

  &:hover{
  box-shadow: .1px .1px 2px #bbbbbb;

}

@media (min-width: 750px) {
    display: flex;
   }
`

const SlideArrowIconLeft = styled(SlideArrowIcon)`
  left: 0%;
`
const SlideArrowIconRight = styled(SlideArrowIcon)`
   right: 0%;
`

export default Slider
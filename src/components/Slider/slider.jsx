
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import { useState } from 'react'
import SideLink from '../SlideLink/slidelink'
import styled from "styled-components"


const Icondata =[
  {
  "icons": ["Design","Surfing","Bed and breakfast","Artic","Beach","Caves","OMG!","Tropical","Castles","Tents","Cabins","Lakes"]

  },
  {
    "icons": ["Design","Beach","Caves","OMG!","Surfing","Bed and breakfast","Artic","Castles","Tents","Cabins","Tropical","Castles"]
    },
   { "icons" :["Design","Surfing","Bed and breakfast","Artic","Beach","Caves","OMG!","Tropical","Castles","Tents","Cabins","Lakes"]}
]


const Slider =()=>{
  const [moveby,setmoveby] = useState(0)


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
  <Container>
    <SlideContainer>
        {moveby > -200 ? <SlideArrowIconRight onClick={moveright} ><GoChevronRight/></SlideArrowIconRight> : null}
        {moveby !== 0 ? <SlideArrowIconLeft className="arrow-container arrow-left" onClick={moveleft}><GoChevronLeft/></SlideArrowIconLeft>:null} 
    <SlideContainerWindow >
        {
            Icondata.map(({icons,i})=>(
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
)

}

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  max-width: 1250px;
  margin: 30px auto;

`

const FilterContainer = styled.div `
  border: 1px solid var(--light-grey);
  width: 88px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size:12px;
  border-radius: 10px;
  font-weight: 600;

  span{
    color: var(--text-color-dark);
  }
`


const SlideContainer = styled.div`
  position: relative;
  width:90%;
`
const SlideContainerWindow = styled.div`
    display: flex;
    min-height: 3vh;
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
`

const SlideElementGroup = styled.div`
   min-width: 100%;
   display:flex;
   transition: transform .4s ease-out;
   justify-content:space-between;
`


const SlideArrowIcon  = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  top:50%;
  margin: -15px;
  border: 1px solid rgb(154, 154, 154);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0px 0px 10px 30px rgba(255,255,255,0.9);
`

const SlideArrowIconLeft = styled(SlideArrowIcon)`
  left: 0%;
`
const SlideArrowIconRight = styled(SlideArrowIcon)`
   right: 0%;
`

export default Slider

import './slider.css'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import { useState } from 'react'
import SideLink from '../components/SlideLink/slidelink'
// import { useRef, useState,useEffect } from 'react'


const Slider =()=>{
  const [moveby,setmoveby] = useState(0)


  const moveright=()=>{
    if(moveby > -200){
      setmoveby(moveby-50)
    }
  }

const moveleft =()=>{
  if(moveby !== 0){
    setmoveby(moveby+50)
  }
}

return (
  <div className="slide-container">
      {moveby > -200? <span className="arrow-container arrow-right" onClick={moveright} ><GoChevronRight/></span> : null}
      {moveby !== 0 ? <span className="arrow-container arrow-left" onClick={moveleft}><GoChevronLeft/></span>:null} 
  <div className="row__grid" >
    <div className="slide-element-group" style={{transform: `translateX(${moveby}%)`}}>
    </div>
    <div className="slide-element-group" style={{transform: `translateX(${moveby}%)`}}></div>
    <div className="slide-element-group" style={{transform: `translateX(${moveby}%)`, backgroundColor: `yellow`}}></div>
  </div>
  </div>
)

}


const SlideContainer = styled.div`
  

  
`


export default Slider
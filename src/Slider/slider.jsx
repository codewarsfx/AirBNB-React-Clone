
import './slider.css'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import { useState } from 'react'
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
  <div className="container">
      {moveby > -200? <span className="arrow-container arrow-right" onClick={moveright} ><GoChevronRight/></span> : null}
      {moveby !== 0 ? <span className="arrow-container arrow-left" onClick={moveleft}><GoChevronLeft/></span>:null} 
  <div className="row__grid" >
    <div className="xy" style={{transform: `translateX(${moveby}%)`}}>
       <div>
          <a href="/">
                <img src='/assests/img/Design.png' alt="design" />
                <span>Design</span>
          </a>
       </div>
    </div>
    <div className="xy" style={{transform: `translateX(${moveby}%)`}}></div>
    <div className="xy" style={{transform: `translateX(${moveby}%)`, backgroundColor: `yellow`}}></div>
  </div>
  </div>
)

}


export default Slider
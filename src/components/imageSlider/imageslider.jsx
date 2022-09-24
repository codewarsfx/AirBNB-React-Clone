import './imageSlider.css'
import { useState } from 'react'

const ImageSlider = ()=>{
    const [moveby,setmoveby] = useState(0)


    const moveright=()=>{
        if(moveby > -500){
          setmoveby(moveby-100)
        }
      }
  
    const moveleft =()=>{
      if(moveby !== 0){
        setmoveby(moveby+100)
      }
    }


    return (
      <div className='slider-container'>
       {moveby > -400 ?<div className="controls right" onClick={moveright}></div> :null}
       {moveby !== 0 ?<div className="controls" onClick={moveleft}></div>:null}
        <div className="slider-window">
            <div className="slider-image" style={{backgroundColor:"yellow",transform:`translateX(${moveby}%)`}}></div>
            <div className="slider-image" style={{backgroundColor:"red",transform: `translateX(${moveby}%)`}}></div>
            <div className="slider-image" style={{backgroundColor:"green",transform: `translateX(${moveby}%)`}}></div>
            <div className="slider-image" style={{backgroundColor:"pink",transform: `translateX(${moveby}%)`}}></div>
            <div className="slider-image" style={{backgroundColor:"blue",transform: `translateX(${moveby}%)`}}></div>
        </div>
      </div>
    )
}


export default ImageSlider
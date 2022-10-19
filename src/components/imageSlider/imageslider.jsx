import './imageSlider.css'
import { useState } from 'react'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'

import styled from 'styled-components'

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
          {moveby > -500 ? <SlideArrowIconRight onClick={moveright} ><GoChevronRight/></SlideArrowIconRight> : null}
          {moveby !== 0 ? <SlideArrowIconLeft className="arrow-container arrow-left" onClick={moveleft}><GoChevronLeft/></SlideArrowIconLeft>:null} 
        <div className="slider-window">
            <img src="/assests/img/homes/cabin.jpeg" alt="home picture"  className='slider-image' style={{ transform: `translateX(${moveby}%)` }}/>
            <img src="/assests/img/homes/cabin.jpeg" alt="home picture"  className='slider-image' style={{ transform: `translateX(${moveby}%)` }}/>
            <img src="/assests/img/homes/cabin.jpeg" alt="home picture" className='slider-image' style={{ transform: `translateX(${moveby}%)` }}/>
          <img src="/assests/img/homes/cabin.jpeg" alt="home picture" className='slider-image' style={{ transform: `translateX(${moveby}%)` }}/>
          <img src="/assests/img/homes/cabin.jpeg" alt="home picture" className='slider-image'  style={{ transform: `translateX(${moveby}%)` }}/>
   
        </div>
      </div>
    )
}


const SlideArrowIcon  = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top:50%;
  transform:translateY(-50%);
  border: 1px solid var(--light-grey);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color:white;
  color: black;
  visibility: hidden;
  cursor: pointer;
  z-index: 1;
  display: flex;



`

const SlideArrowIconLeft = styled(SlideArrowIcon)`
  left: 5%;
`
const SlideArrowIconRight = styled(SlideArrowIcon)`
   right: 5%;
`

export default ImageSlider
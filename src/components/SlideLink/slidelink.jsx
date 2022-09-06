import { Link } from "react-router-dom"
import styled from "styled-components"


const SideLink =({name})=>{
   return (
    <SlideElement to="/" className='slide-element-link'>
        <LinkImageContaier className='slide-img'><img src={`/assests/img/${name}.png`}  alt={`${name}`} /></LinkImageContaier>
        <span>{name}</span>
    </SlideElement>
   )
}


const SlideElement = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: .3em;

  span{  
    font-size: 12px;
    color: var(--text-color-light);
    margin-top: 5px;
    font-weight: 600;
  }
`

const LinkImageContaier = styled.div`
     width: 25px;
     height: 25px;

     img{
        width: 100%;
        height: 100%;
     }
`


export default SideLink


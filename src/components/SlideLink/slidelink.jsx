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
  justify-content: center;
  text-decoration: none;
  padding: .3em;
  transition: transform .4s ease-out;
  margin:0 4.3vw;
  :first-child{
   margin-left: 6vw;
  }

  @media (max-width: 380px){
    margin:0 3.8vw;
  }
  
  @media (min-width: 500px){
    margin:0 2vw;
  }

  @media (min-width: 750px){
    margin:0 2.8vw ;
    :first-child{
     margin-left: 0vw;
  }
  }

  @media (min-width: 850px){
    margin:0 1.5vw ;
    :first-child{
     margin-left: 0vw;
  }
  }


span{  
    font-size: 12px;
    color: var(--text-color-light);
    margin-top: 5px;
    font-weight: 600;
  }



`

const LinkImageContaier = styled.div`
     width: 24px;
     height: 24px;

     img{
        width: 100%;
        height: 100%;
     }
`


export default SideLink


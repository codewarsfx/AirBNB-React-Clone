import styled from "styled-components"
import useModal from "../../Hooks/useModal"



import AnimatedModal from "../animatedModal/animatedModal"
import FooterPopUp from "../FooterPop/footerPopUp"

const Footer =()=>{
    const {showModal,click} = useModal()


return(
    <FooterContainer >
       <div className="footer">
          <span>
            &copy; 2022, Airbnb Inc.
          </span>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
            <a href="#">Destinations</a>
       </div>
       <div className="footer footer--right">
          <span  className="globe">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
          </span>
          <a href="#">$ English (US) </a>
            <a href="#">$ USD</a>
            <a href="#" style={{textDecoration: "underline"}}>Support & resources</a>  
          <span className="globe" onClick={click} >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px",width: "16px", stroke: "currentcolor", strokeWidth: "4", overflow: "visible"}}><g fill="none"><path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path></g></svg>
          </span>
       </div>
     <AnimatedModal showModal={showModal} click={click} component={<FooterPopUp click={click}/>}/>
    </FooterContainer>
)
}


const FooterContainer =  styled.div`
    background-color:white;
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    display: flex;
    color: var(--text-color-dark);
    padding: 1.3em 6em;
    font-size: 14px;
    box-shadow: 0px -3px 3px -3px #d4d4d4;
   a{
      color: inherit;
      text-decoration:none;
      margin:0 20px;
        :hover{
            text-decoration: underline;
        }
   }

   .globe{
      border-radius: 50%;
      cursor: pointer;
      transition:transform .2s ease;
      :hover{
        transform:translateY(-2px);
      }
   }

   .footer{
    display: flex;
   }

   .footer--right{
    margin-left: auto;
    font-weight: 600;
   }
    
`

export default Footer
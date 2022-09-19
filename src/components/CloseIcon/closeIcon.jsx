import styled from "styled-components"

const CloseIcon =({click})=>{

return(
    <Close onClick={click}>
         <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
    </Close>
)

}

const Close =styled.span`
    display: block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    cursor: pointer;
:hover { 
    background-color:#f0efef;
}

svg{
     display: block;
     fill: none;
      height: 14px; 
      width: 14px; 
      stroke:var(--text-color-dark); 
      stroke-width: 3; 
      overflow: visible;
}

`

export default CloseIcon
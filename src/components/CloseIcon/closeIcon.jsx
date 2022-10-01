import styled,{ css } from "styled-components"

const CloseIcon =({click,secondary})=>{

return(
    <Close onClick={click} secondary>
         <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
    </Close>
)

}

const Close =styled.span`
    width: 30px;
    height: 30px;
    margin: "5px 0 0 10px" ;
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

${props => props.secondary && css`
        border: 1px solid #aaa;
        margin:0px;
        transition: all .2s ease;

        svg{
            stroke-width: 5; 
            height: 12px; 
      width: 12px;
        }

        :hover { 
            border: none;
            background-color: white;
            box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
         }
  `};

  


`

export default CloseIcon
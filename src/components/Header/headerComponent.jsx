import styled from "styled-components"
import HeaderLogo from "../Logo/logocomponent"
import Navigation from "../Nav/NavComponent"
import SearchButton from "../Search/searchComponet"

const Header = ({toggleModal})=>{

    return(

<HeaderContainer>
    <MainHeader>
        <HeaderLogo/>
        <SearchButton toggleModal={toggleModal}/>
        <Navigation/>
    </MainHeader>
    <hr className="header-rule"/>
</HeaderContainer>


    )
}

const MainHeader = styled.div`

    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1300px;
    margin:20px auto 10px;
    @media (min-width:750px){
        min-height: 100px;
        margin: auto;
        justify-content: space-between;
    }

`

const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top:0;
    background-color: #fff;
    z-index: 1000;
    .header-rule{
        border: .3px solid #DDDDDD;
        display : none;

        @media (min-width: 750px){
            display :block;
        }
    }
`


export default Header
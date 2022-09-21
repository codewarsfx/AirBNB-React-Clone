import styled from "styled-components"
import HeaderLogo from "../Logo/logocomponent"
import Navigation from "../Nav/NavComponent"
import SearchButton from "../Search/searchComponet"

const Header = ()=>{

    return(

<HeaderContainer>
    <MainHeader>
        <HeaderLogo/>
        <SearchButton/>
        <Navigation/>
    </MainHeader>
    <hr className="header-rule"/>
</HeaderContainer>


    )
}

const MainHeader =styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1300px;
    margin:20px auto 10px;

    /* min-height: 100px; */
`

const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top:0;
    background-color: #fff;
    z-index: 1;
    .header-rule{
        border: .3px solid #DDDDDD;
        display : none;
    }
`


export default Header
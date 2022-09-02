import styled from "styled-components"
import HeaderLogo from "../Logo/logocomponent"
import Navigation from "../Nav/NavComponent"
import SearchButton from "../Search/searchComponet"

const Header = ()=>{

    return(

<HeaderContainer>
        <HeaderLogo/>
        <SearchButton/>
        <Navigation/>
</HeaderContainer>

    )
}

const HeaderContainer =styled.header`
    display: flex;
    align-items: center;
    min-height:90px;
    justify-content: space-between;
`


export default Header
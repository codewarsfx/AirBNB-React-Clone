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
    <hr style={{border: '.3px solid #DDDDDD'}} />
</HeaderContainer>


    )
}

const MainHeader =styled.div`
    display: flex;
    align-items: center;
    min-height:100px;
    justify-content: space-between;
    max-width: 1300px;
    margin:auto;
`

const HeaderContainer =styled.header`
     width: 100%;
    position: fixed;
    top:0;
    background-color: #fff;
`


export default Header
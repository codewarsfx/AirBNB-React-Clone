import styled from "styled-components";
import {GoSearch} from "react-icons/go"

const SearchButton =  ()=>{


    return(
    <Container>
 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{"display": "block",height: "16px", width: "16px", fill:"rgb(34, 34, 34)"}}><path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path></svg>
        <SearchText>
            <p>
                Where to?
            </p>
            <p>
                Anywhere <SmallCircle/> Any week <SmallCircle/>  Add guests
            </p>
        </SearchText>
        <FilterIconContainer>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{"display": "block",height: "16px", width: "16px", fill:"rgb(34, 34, 34)"}}><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
        </FilterIconContainer>
    </Container>
    )




}


const Container= styled.div`
    margin-top: 15px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 2px 1px 10px var(--box-shadow);
    border-radius:30px;
`


const SearchText = styled.div`
 width: 65%;
 p{
    margin: 0;
    font-size: 12px;
    display: flex;
    align-items: center;

    &:first-child{
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 3px;
        color: var(--text-color-dark);
    }

 }

`

const FilterIconContainer = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--light-grey);
`

const SmallCircle = styled.div`
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color:var(--text-color-light);
    margin-inline: 5px;
`







export default SearchButton;
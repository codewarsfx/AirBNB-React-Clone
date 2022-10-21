import styled from "styled-components";

const Search = () => {
	return (
		<>
			<Container>
                <Text>
                    Start your search
                </Text>
                <SearchIconContainer>   
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path></svg>
            </SearchIconContainer> 
			</Container>
		</>
	);
};

const Container = styled.div`
	padding: .5em .5em .5em 1.5em;
	display: flex;
	align-items: center;
    justify-content: space-between;
	box-shadow: 2px 1px 10px -2px #c4c3c3;
	border: 1px solid #dddd;
	border-radius: 30px;
	width: 100%;
	transition: box-shadow 0.2s ease-in;
	cursor: pointer;
    width: 300px;
	

	:hover {
		box-shadow: var(--box-shadow-hover);
	}
`;

const Text = styled.p`
	margin:0;
		font-size: 14px;
		font-weight: 600;
		color: var(--text-color-dark);
	
`;

export const SearchIconContainer = styled.div`

        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: var(--primary-ccolor);
        display: flex;
        align-items: center;
        justify-content: center;
        

        & > svg{
            fill: white;
            height: 13px;
            width: 13px;
            stroke:white;
        }

    
`
export default Search;

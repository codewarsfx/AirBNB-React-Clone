import { useEffect, useState } from "react";
import styled from "styled-components";

const FixedHeader = () => {
	const [showHeader, setShowHeader] = useState(false);

	useEffect(() => {
        const event = window.addEventListener("scroll", (e) => {
            

            if (window.scrollY > 550){
                setShowHeader(true)
              }
              else{
                setShowHeader(false)
              }
            
           

        });
        


		return window.removeEventListener(event, () => {});
	}, []);

	return (
		showHeader && (
			<Container>
				<Wrapper>
					<NavList>
						<li>
							<Link>Photos</Link>
						</li>
						<li>
							<Link>Amenities</Link>
						</li>
						<li>
							<Link>Reviews</Link>
						</li>
						<li>
							<Link>Location</Link>
						</li>
					</NavList>
				</Wrapper>
			</Container>
		)
	);
};

const Container = styled.header`
	display: block;
	border-bottom: 1px solid var(--light-grey);
	position: fixed;
	top: 0;
	width: 100%;
    z-index: 1;
    background-color: white;
    @media (max-width:745px){
        display: none;
    }
`;

const Wrapper = styled.div`
	max-width: 1200px;
	margin: auto;
`;
const NavList = styled.ul`
	display: flex;
	padding: 0;
	margin: 0;
	list-style-type: none;
`;

const Link = styled.a`
	color: var(--text-color-dark);
	cursor: pointer;
	font-size: 14px;
	font-weight: 600;
	display: block;
	padding: 2em 0;
	margin-right: 2em;
	border-bottom: 4px solid transparent;

	:hover {
		border-color: black;
	}
`;

export default FixedHeader;

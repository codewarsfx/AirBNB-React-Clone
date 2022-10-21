import styled from "styled-components";

const NavDropdown = ({ toggleModal, toggleDropDownOnClick }) => {
	const showRegisterModal = () => {
		toggleModal();
		toggleDropDownOnClick();
	};
	return (
		<DropdownContainer>
			<DropdownTop>
				<DropdownList>
					<li>
						<span
							onClick={showRegisterModal}
							className='navbutton-dropdown-link navbutton-dropdown-link--bold'
						>
							Sign Up
						</span>
					</li>
					<li>
						<span className='navbutton-dropdown-link'>Log in</span>
					</li>
				</DropdownList>
			</DropdownTop>
			<div>
				<DropdownList>
					<li>
						<span className='navbutton-dropdown-link'>Host your home</span>
					</li>
					<li>
						<span className='navbutton-dropdown-link'>Host an experience</span>
					</li>
					<li>
						<span className='navbutton-dropdown-link'>Help</span>
					</li>
				</DropdownList>
			</div>
		</DropdownContainer>
	);
};

const DropdownContainer = styled.div`
	position: absolute;
	top: 120%;
	font-size: 13px;
	width: 94%;
	left: 50%;
	margin-left: -45%;
	box-shadow: 0.1px 0px 30px -10px rgb(176, 176, 176);
	background-color: #fff;
	border: 0.5px solid var(--light-grey);
	border-radius: 10px;
	z-index: 200;
`;

const DropdownTop = styled.div`
	border-bottom: 1px solid var(--light-grey);
`;

const DropdownList = styled.ul`
	margin: 0;
	padding: 0.8em 0;
	list-style-type: none;

	.navbutton-dropdown-link {
		color: var(--text-color-dark);
		text-decoration: none;
		padding: 1em;
		display: block;

		:hover {
			background-color: var(--background-hover);
		}
	}

	.navbutton-dropdown-link--bold {
		font-weight: 600;
	}
`;

export default NavDropdown;

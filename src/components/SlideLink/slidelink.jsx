import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import { HomeContext} from "../../context/homeContext";

const activeLink = { borderColor: "green" };
const normalLink = { borderColor: "" };

const SideLink = ({ name }) => {
    const {isLoading} = useContext(HomeContext)
	return (
		<SlideElement
			to={`/${name}`}
			style={({ isActive }) => (isActive ? activeLink : normalLink)}
			className='slide-element-link'
		>
			<LinkImageContaier className='slide-img'>
				{!isLoading ? <img src={`/assests/img/${name}.png`} alt={`${name}`} /> : <>
					<Skeleton circle className='skeleton-circle' />
					
				</>}
			</LinkImageContaier>
			<span>{!isLoading ? name :  <Skeleton width={65} height={10}/>} </span>
		</SlideElement>
	);
};

const SlideElement = styled(NavLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	padding: 0.3em;
	transition: transform 0.4s ease-out;
	border-bottom: 2px solid #fff;
	margin: 0 4.3vw;
	:first-child {
		margin-left: 6vw;
	}

	:hover {
		border-color: #ddd;
	}

	@media (max-width: 380px) {
		margin: 0 3.8vw;
	}

	@media (min-width: 500px) {
		margin: 0 2vw;
	}

	@media (min-width: 750px) {
		margin: 0 2.8vw;
		:first-child {
			margin-left: 0vw;
		}
	}

	@media (min-width: 850px) {
		margin: 0 1.5vw;
		:first-child {
			margin-left: 0vw;
		}
	}

	span {
		font-size: 12px;
		color: var(--text-color-light);
		margin-top: 5px;
		font-weight: 600;
	}
`;

const LinkImageContaier = styled.div`
	width: 24px;
	height: 24px;

	.skeleton-circle{
		width: 26px;
	height: 26px;
	
	}

	.skelton-bar{
		margin-top:1em;
	}

	img {
		width: 100%;
		height: 100%;
	}
`;

export default SideLink;

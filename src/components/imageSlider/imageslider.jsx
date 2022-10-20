import "./imageSlider.css";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link } from 'react-router-dom'

import styled from "styled-components";

const ImageSlider = ({ images,id }) => {
	const [moveby, setmoveby] = useState(0);

	const moveright = () => {
		if (moveby > -500) {
			setmoveby(moveby - 100);
		}
	};

	const moveleft = () => {
		if (moveby <= 0) {
			setmoveby(moveby + 100);
		}
	};

	return (
		<SliderContainer>
			{moveby > -400 ? (
				<SlideArrowIconRight
					className='arrow-container arrow-left'
					onClick={moveright}
				>
					<GoChevronRight />
				</SlideArrowIconRight>
			) : null}
			{moveby !== 0 ? (
				<SlideArrowIconLeft
					className='arrow-container arrow-left'
					onClick={moveleft}
				>
					<GoChevronLeft />
				</SlideArrowIconLeft>
			) : null}
			<div className='slider-window'>
				{images.map((image,i) => (
					<Link key={image+i} className='slider-image'  to={`/homes/${id}`}><img
            src={image}
            className='slider-image' 
						alt='home picture'
						style={{ transform: `translateX(${moveby}%)` }}
					/></Link>
				))}
			</div>
		</SliderContainer>
	);
};

const SliderContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: inline;

	:hover {
		.arrow-container {
			visibility: visible;
		}
	}
`;

const SlideArrowIcon = styled.div`
	width: 32px;
	height: 32px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	border: 1px solid var(--light-grey);
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.8);
	color: black;
	visibility: hidden;
	transition: visibility 0.2s ease;
	cursor: pointer;
	z-index: 1;
	display: flex;
`;

const SlideArrowIconLeft = styled(SlideArrowIcon)`
	left: 5%;
`;
const SlideArrowIconRight = styled(SlideArrowIcon)`
	right: 5%;
`;

export default ImageSlider;

import "./homeDetail.css";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

import ImageSlider from "../imageSlider/imageslider";

const HomeDetail = ({ images, name, rating, distance, date, price,id }) => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .5 } }} className='home-group'>
			<div className="bookmark-icon">
			<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
			</div>
			<div className='home-group-top'>
				<ImageSlider images={images} id= {id} />
			</div>
			<div className='home-group-bottom'>
				<p className='home-details home-details--bold'>
					<span className='home-details-name'>{name}</span>
					<span className='home-details-rating'>
						<AiFillStar />
					</span>
					{rating}
				</p>
				<p className='home-details home-details-location'>
					{distance} kilometers away
				</p>
				<p className='home-details home-details-data'>{date}</p>
				<p className='home-details'>
					<span className='home-details-price'>${price}</span>
					night
				</p>
			</div>
		</motion.div>
	);
};

export default HomeDetail;

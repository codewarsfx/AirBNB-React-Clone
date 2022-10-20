import "./homeDetail.css";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

import ImageSlider from "../imageSlider/imageslider";

const HomeDetail = ({ images, name, rating, distance, date, price,id }) => {
	return (
        <motion.div initial={{opacity:0} } animate={{opacity:1,transition:{delay:.5}}} className='home-group'>
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


import "./ratingsBar.css";

const getRatingPercentage = (rating) => {
    
    return  (( rating / 5 ) * 100).toFixed(2)
}


const RatingsBar = ({rating=0}) => {
	return (
		// <>
		// 	<div className='rating-bar-item'>
		// 		<div className='ratings-bar' style={{"--width":`${getRatingPercentage(rating)}%`}}></div>
        //         <span className='ratings-bar-text'>{rating}</span>
		// 	</div>
		// </>
        <h1>h</h1>
	);
};

export default RatingsBar;

import './homeDetail.css'
import {AiFillStar} from "react-icons/ai"
import { Link } from 'react-router-dom'
import ImageSlider from '../imageSlider/imageslider'

const HomeDetail= ({image,name,rating,location,date,price,daylight})=>{

   return (
    <div className="home-group">
    <div  className="home-group-top">
        <ImageSlider/>
    </div>
    <div className="home-group-bottom">
        <p className="home-details home-details--bold">
            <span className="home-details-name">
                {name}
            </span>
            <span className="home-details-rating">
              <AiFillStar/> 
            </span>
            {rating}
        </p>
        <p className="home-details home-details-location">
            {location}
        </p>
        <p className="home-details home-details-data">
            {date}
        </p>
        <p className="home-details">
           <span className="home-details-price">
            ${price}
           </span>
           {daylight}
        </p>
    </div>
</div>
   )

}



export default HomeDetail
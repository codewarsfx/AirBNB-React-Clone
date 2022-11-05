import "./review.css";
import { AiFillStar } from 'react-icons/ai'
import {FaChevronRight } from 'react-icons/fa'
import RatingsBar from "../RatingsBar/ratingsBar";

const Review = () => {
    return <>
        
        <div className="review-container">
            <p className="review-rating"><AiFillStar className="rating-icon" /> 4.69 . 8 reviews</p>
            <div className="review-bars-wrapper">
                <div className=" review-section-bars">
                    <span className="review-bars-description">
                        Cleanliness 
                    </span>
                    <span className="review-bars">
                        <RatingsBar rating={4.6}/>
                    </span>
                </div>
                <div className="review-section-bars">
                    <span className="review-bars-description">
                    Communication
                    </span>
                    <span className="review-bars">
                        <RatingsBar rating={3.2}/>
                    </span>
                </div>
                <div className="review-section-bars">
                    <span className="review-bars-description">
                    Check-in
                    </span>
                    <span className="review-bars">
                        <RatingsBar rating={2.9}/>
                    </span>
                </div>
                <div className=" review-section-bars">
                    <span className="review-bars-description">
                    Accuracy
                    </span>
                    <span className="review-bars">
                        <RatingsBar rating={4.5}/>
                    </span>
                </div>
                <div className=" review-section-bars">
                    <span className="review-bars-description">
                    Location
                    </span>
                    <span className="review-bars">
                        <RatingsBar rating={2.7}/>
                    </span>
                </div>
                <div className="review-section-bars">
                    <span className="review-bars-description">
                  Value
                    </span>
                    <span className="review-bars">
                        <RatingsBar rating={4.6}/>
                    </span>
                </div>
             </div>
            <div className="review-wrapper">
                <div className="review-section">
                    <div className="review-top">
                        <div className="review-avatar">
                            <img src="/assests/img/users/Annna.jpg" alt="Sierra's Image" />
                        </div>
                        <div className="review-details">
                            <p className="review-name">Sierra</p>
                            <p className="review-date">October 2022</p>
                        </div>
                    </div>
                    <div className="review-bottom">
                        <p className="review-comment">
                        Amazing views and a great space. The breakfast was delicious. Only negative was the neighborhood dogs but that wouldn’t stop us from staying again!!
                        </p>
                        <a href="#" className="rating-show">Show more <FaChevronRight className="rating-icon--show"/></a>
                    </div>
                </div>
                <div className="review-section">
                    <div className="review-top">
                        <div className="review-avatar">
                            <img src="/assests/img/users/Annna.jpg" alt="Sierra's Image" />
                        </div>
                        <div className="review-details">
                            <p className="review-name">Sierra</p>
                            <p className="review-date">October 2022</p>
                        </div>
                    </div>
                    <div className="review-bottom">
                        <p className="review-comment">
                        Amazing views and a great space. The breakfast was delicious. Only negative was the neighborhood dogs but that wouldn’t stop us from staying again!!
                        </p>
                        <a href="#" className="rating-show">Show more <FaChevronRight className="rating-icon--show"/></a>
                    </div>
                </div>
                <div className="review-section">
                    <div className="review-top">
                        <div className="review-avatar">
                            <img src="/assests/img/users/Annna.jpg" alt="Sierra's Image" />
                        </div>
                        <div className="review-details">
                            <p className="review-name">Sierra</p>
                            <p className="review-date">October 2022</p>
                        </div>
                    </div>
                    <div className="review-bottom">
                        <p className="review-comment">
                        Amazing views and a great space. The breakfast was delicious. Only negative was the neighborhood dogs but that wouldn’t stop us from staying again!!
                        </p>
                    </div>
                </div>
                <div className="review-section">
                    <div className="review-top">
                        <div className="review-avatar">
                            <img src="/assests/img/users/Annna.jpg" alt="Sierra's Image" />
                        </div>
                        <div className="review-details">
                            <p className="review-name">Sierra</p>
                            <p className="review-date">October 2022</p>
                        </div>
                    </div>
                    <div className="review-bottom">
                        <p className="review-comment">
                        Amazing views and a great space. The breakfast was delicious. Only negative was the neighborhood dogs but that wouldn’t stop us from staying again!!
                        </p>
                    </div>
                </div>
            </div>
            <button className="review-cta">
                Show all 138 reviews 
            </button>
            <div className="line-rule" />
    </div>
    </>;
};

export default Review;

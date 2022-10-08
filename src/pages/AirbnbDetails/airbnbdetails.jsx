import { AiFillStar } from 'react-icons/ai'
import {GiGhostAlly} from 'react-icons/gi'

import './airbnbdetails.css'


import HomeDetailsHeader from '../../components/HomeDetailsHeader/homeDetailsHeader'
import HomeHero from '../../components/homeDetailsHero/homeDetailsHero'


import './airbnbdetails.css'
const AirbBnbDetails = ()=>{
    return (
   <div className="details-container">
    <HomeDetailsHeader/>
    <HomeHero/>
    <div className="details-description">
            <h1 className="details-description-title">
                Hacienda el Terrero - Casa Los Enanos
            </h1>
            
            <p className="details-description-text">
            <span className="details-description-stats">
            <AiFillStar className='details-description-stats-icon'/> 
            5.0
            </span>
            <span className="details-description-seperation"></span>
            <span className="details-description-stats details-description-stats-primary">
            18 reviews 
            </span>
            <span className="details-description-seperation"></span>
            <span className="details-description-stats">
            <GiGhostAlly className='details-description-stats-icon' />
            Superhost 
            </span>
            <span className="details-description-seperation"></span>
            <span className="details-description-stats details-description-stats-primary">
                Los Realejos,Canarias,Spain
            </span>
            </p>
    </div>
    <div className="details-description details-description--flexed">
        <p className="details-description-status">
            <span>This is a rare find.</span> Gestión De Activos Pedrana's place on Airbnb is usually fully booked.
        </p>
        <svg className='details-description-illustration' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><g stroke="none"><path d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z" fill-opacity=".2"></path><path d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z"></path></g></svg>
    </div>
    <div className="details-description details-description--flexed">   
            <div className='description-wrap'>
            <h1 className="details-description-title details-description-small">
                Entire home 
                hosted by Gestión De Activos Pedrana
            </h1>
            <p className="details-description-text details-description-text-big">
            <span className="details-description-stats">
                2 guests
            </span>
            <span className="details-description-seperation"></span>
            <span className="details-description-stats">
                1 bedroom 
            </span>
            <span className="details-description-seperation"></span>
            <span className="details-description-stats">
                1 bed
            </span>
            <span className="details-description-seperation"></span>
            <span className="details-description-stats">
                1 bath
            </span>
            </p>
            </div>
            <img class="details-description-img" aria-hidden="true" alt="Gestión De Activos Pedrana is a superhost. Learn more about Gestión De Activos Pedrana." decoding="async" elementtiming="LCP-target" src="https://a0.muscache.com/im/pictures/user/076c9f5a-ee58-4b0b-b63c-017edd2405af.jpg?im_w=240" data-original-uri="https://a0.muscache.com/im/pictures/user/076c9f5a-ee58-4b0b-b63c-017edd2405af.jpg?im_w=240" ></img>
    </div>

   </div>
    )
}

export default AirbBnbDetails
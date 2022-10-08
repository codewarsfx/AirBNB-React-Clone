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
   </div>
    )
}

export default AirbBnbDetails
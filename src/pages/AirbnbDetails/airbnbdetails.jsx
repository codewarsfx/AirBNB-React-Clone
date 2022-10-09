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
    <div className="details-description">
        <div className="details-description-item">
            <div className="details-description-item-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path></svg>
            </div>
            <div className="detail-description-item-text">
                <p className="detail-description-text-primary">
                Gestión De Activos Pedrana is a Superhost
                </p>
                <p className="detail-description-text-sec">
                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                </p>
            </div>

        </div>
        <div className="details-description-item">
            <div className="details-description-item-icon">
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path></svg>            </div>
            <div className="detail-description-item-text">
                <p className="detail-description-text-primary">
                Dive right in
                </p>
                <p className="detail-description-text-sec">
                This is one of the few places in the area with a pool.                </p>
            </div>

        </div>
        <div className="details-description-item">
            <div className="details-description-item-icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path></svg>            </div>
            <div className="detail-description-item-text">
                <p className="detail-description-text-primary">
                Free cancellation before Nov 1.
                </p>
                
            </div>

        </div>

    </div>
    <div className="details-description">
       <img  className='details-description-logo' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"/>
       <p className="details-description-status details-description-status--small">
       Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
       </p>

       <a href="#" className="details-description-item-link">Learn more</a>
    
    </div>
   </div>
    )
}

export default AirbBnbDetails
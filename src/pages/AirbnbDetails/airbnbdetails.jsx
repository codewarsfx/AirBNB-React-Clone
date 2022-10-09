import { AiFillStar } from 'react-icons/ai'
import {GiGhostAlly} from 'react-icons/gi'
import {BsChevronRight} from 'react-icons/bs'

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
        <div className="details-description">
        <div className="details-description-item">
                <div className="details-description-item-icon">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "16px", width: "16px"}}><path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path></svg> </div>
                <div className="detail-description-item-text">
                    <p className="detail-description-text-primary detail-description-text-primary--light details-description-status--small">
                    Some info has been automatically translated.
                    </p>
                    <a href="#" className="details-description-item-link" style={{fontSize:"14px"}}>Show original language <BsChevronRight/></a>
                </div>
        </div>
            <p className="detail-description-text-primary ">The space</p>
            <p className="detail-description-text-primary detail-description-text-primary--light">
                Enjoy the sunrises from your private terrace and sleep lulled by the sound of the waves. This cozy house has a kitchen, bathroom and separate bedroom. Its peculiar architecture will make you fall in love and you won't be able to forget those breakfasts in bed overlooking the sea...
            </p>
            <a href="#" className="details-description-item-link">Show more <BsChevronRight/></a>
        </div>
        <div className="details-description">
        <h1 className="details-description-title details-description-small">
                    What this place offers
        </h1>
        <div className="details-description-item">
                <div className="details-description-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg>
                </div>
                <div className="detail-description-item-text">
                    <p className="detail-description-text-primary detail-description-text-primary--light">
                    Free parking on premises
                    </p>
                </div>
        </div>
        <div className="details-description-item">
                <div className="details-description-item-icon">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path></svg>            </div>
                <div className="detail-description-item-text">
                    <p className="detail-description-text-primary detail-description-text-primary--light">
                    Shared pool
                    </p>
                </div>
        </div>
        <div className="details-description-item">
                <div className="details-description-item-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>            </div>
                <div className="detail-description-item-text">
                    <p className="detail-description-text-primary detail-description-text-primary--light">
                    Pets allowed
                    </p>
                </div>
        </div>
        <div className="details-description-item">
                <div className="details-description-item-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3v26a2 2 0 0 1-1.85 1.995L25 31H7a2 2 0 0 1-1.995-1.85L5 29V3a2 2 0 0 1 1.85-1.995L7 1zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>            </div>
                <div className="detail-description-item-text">
                    <p className="detail-description-text-primary detail-description-text-primary--light">
                    Refrigerator
                    </p>
                </div>
        </div>
        <div className="details-description-item">
                <div className="details-description-item-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path></svg>            </div>
                <div className="detail-description-item-text">
                    <p className="detail-description-text-primary detail-description-text-primary--light">
                    Long term stays allowed
                    </p>
                </div>
        </div>    <div className="details-description-item">
                <div className="details-description-item-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="M2.05 6.292L4 8.242V25a3 3 0 0 0 2.824 2.995L7 28h16.757l1.95 1.95c-.161.023-.325.038-.49.045L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7c0-.24.017-.477.05-.708zm1.657-4l26 26-1.414 1.415-26-26 1.414-1.414zM25 2a5 5 0 0 1 4.995 4.783L30 7v18c0 .24-.017.476-.05.707L28 23.757V7a3 3 0 0 0-2.824-2.995L25 4H8.242l-1.95-1.95c.162-.023.325-.038.491-.045L7 2h18zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17h2.03zm5.9 4.243l1.352 1.352a6.954 6.954 0 0 1-1.351.334L17 21.243zM21.243 17l1.686.001c-.067.467-.18.919-.334 1.351L21.243 17zm-4.242-7.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1l.001-2.029zm-7.596 4.577L10.757 15 9.071 15c.067-.467.18-.92.334-1.352zM15 9.071l-.001 1.686-1.35-1.352A6.954 6.954 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>            </div>
                <div className="detail-description-item-text">
                    <p className="detail-description-text-primary detail-description-text-primary--light detail-description-text-line">
                    Carbon monoxide alarm
                    </p>
                </div>
        </div>
        <div className="details-description-item">
                <div className="details-description-item-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="M3.486 7.727l1.447 1.448A12.94 12.94 0 0 0 3 16c0 7.18 5.82 13 13 13 2.503 0 4.84-.707 6.824-1.933l1.448 1.448A14.93 14.93 0 0 1 16 31C7.716 31 1 24.284 1 16c0-3.057.915-5.901 2.486-8.273zm.221-5.434l26 26-1.414 1.414-26-26 1.414-1.414zM16 1c8.284 0 15 6.716 15 15 0 3.057-.914 5.9-2.485 8.272l-1.448-1.448A12.94 12.94 0 0 0 29 16c0-7.18-5.82-13-13-13a12.94 12.94 0 0 0-6.825 1.933L7.727 3.486A14.93 14.93 0 0 1 16 1zm-4.9 16a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17h2.03zm5.9 4.243l1.352 1.352a6.954 6.954 0 0 1-1.351.334L17 21.243zM21.243 17l1.686.001c-.067.467-.18.919-.334 1.351L21.243 17zm-4.242-7.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1l.001-2.029zm-7.596 4.577L10.757 15 9.071 15c.067-.467.18-.92.334-1.352zM15 9.071l-.001 1.686-1.35-1.352A6.954 6.954 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>            </div>
                <div className="detail-description-item-text">
                    <p className="detail-description-text-primary detail-description-text-primary--light detail-description-text-line">
                    Smoke alarm
                    </p>
                </div>
        </div>
        <button className="details-description-btn">
            Show all 11 amenities
        </button>
        </div>
   </div>
    )
}

export default AirbBnbDetails
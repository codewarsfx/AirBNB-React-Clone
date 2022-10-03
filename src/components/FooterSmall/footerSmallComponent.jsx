import { useState } from "react"
import { useEffect } from "react"
import {  Outlet,NavLink } from "react-router-dom"
import styled from "styled-components"




import "./fotter.css"

const FooterSmallComponent = ()=>{
    const [showFooter,setShowFooter] = useState(true)

    useEffect(()=>{
    window.addEventListener('scroll',function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          setShowFooter(true)
        }
        else{
            setShowFooter(false)
        }
    })

    },[])

    return (
        <>{
            <Outlet/>
        }
        <Container showFooter={showFooter}>
            
            <div className="footer-actions">
                <NavLink to="/"  className={`footer-actions-item ${({ isActive }) =>
              isActive ? "active" : undefined}`}>
                    <svg className="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                    Explore
                </NavLink>
                <span className="footer-actions-item">
                <svg className="icon"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
                    Wishlists
                </span>
                <NavLink to="/register" className={`footer-actions-item ${({ isActive }) =>
              isActive ? "active" : undefined}`}>
                <svg className="icon icon--last"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"></path></svg>
                    Log in
                </NavLink>
            </div> 
        </Container>
        </>
    )
}


const Container = styled.div`
  
    background-color:white;
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 8.5vh;
    color: var(--text-color-dark);
    font-size: 14px;
    box-shadow: 0px -3px 3px -3px #d4d4d4;
    display: ${({showFooter})=> showFooter? 'none':'flex'};

    @media (min-width: 750px) {
        display :none;
    }
    
`



export default FooterSmallComponent
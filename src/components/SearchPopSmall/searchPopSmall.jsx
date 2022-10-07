import CloseIcon from "../CloseIcon/closeIcon"
import './searchPopSmall.css'
import { motion } from "framer-motion"
const SearchPopSmall =({toggleModal})=>{

  console.log(toggleModal)

    const dropIn = {
        hidden: {
          y:"100vh",

        },
        visible: {
          y: "0vh",
          transition: {
            duration:.3,
          },
        },
        exit: {
          y:"100vh",
          transition: {
            duration:.3,
          },
        },
      };

      const dropdown = {
        hidden: {
          y:"-5vh",

        },
        visible: {
          y: "0vh",
          transition: {
            duration:.5,
          },
        },
      };


      const dropdowndiff = {
        hidden: {
          y:"-5vh",

        },
        visible: {
          y: "0vh",
          transition: {
            duration:.7,
          },
        },
      };


    return(
      <motion.div className="searchsmall-container"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e)=> {
        e.stopPropagation()
    }}
      
      >
        <div className="searchsmall-wrapper">

        <header className="searchsmall-header">
            <CloseIcon secondary click={toggleModal}/>
            <nav className="searchsmall-header-tab">
                <ul>
                    <li><a href="#" className="searchsmall-header-tab-link searchsmall-header-tab-link--active">Stays</a></li>
                    <li><a href="#" className="searchsmall-header-tab-link">Experiences</a></li>
                </ul>
            </nav>
        </header>
        <main className="searchsmall-main">
            <h3 className="searchsmall-main-title">
                Where to?
            </h3>
            <div className="searchsmall-main-input">
              
                <svg className='icon' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path></svg>
           
                <input type="text" className="searchsmall-main-input-element" placeholder="Search destinations"/>
            </div>
            <div className="searchsmall-main-map">
            <div className="searchmap-item searchmap-item--small searchmap-item--small--active">
                <div className="searchmap-item-image">
                    <img src="/assests/img/maps/world.jpeg" alt="world map" />
                </div>
                <p className="searchmap-item-label">
                    I'm flexible
                </p>
            </div>
            <div className="searchmap-item searchmap-item--small">
                <div className="searchmap-item-image">
                     <img src="/assests/img/maps/africa.jpeg" alt="africa map" />
                </div>
                <p className="searchmap-item-label">
                    Africa
                </p>
            </div>
            <div className="searchmap-item searchmap-item--small">
                <div className="searchmap-item-image">
                <img src="/assests/img/maps/middleEast.jpeg" alt="Middle east map" />
                </div>
                <p className="searchmap-item-label">
                    Middle East
                </p>
            </div>
            <div className="searchmap-item searchmap-item--small">
                <div className="searchmap-item-image">
                <img src="/assests/img/maps/pacific.jpeg" alt="pacific map" />
                </div>
                <p className="searchmap-item-label">
                    Pacific Islands
                </p>
            </div>
            <div className="searchmap-item searchmap-item--small">
                <div className="searchmap-item-image">
                <img src="/assests/img/maps/uk.jpeg" alt="uk map" />
                </div>
                <p className="searchmap-item-label">
                    United Kingdom
                </p>
            </div>
            <div className="searchmap-item searchmap-item--small">
                <div className="searchmap-item-image">
                <img src="/assests/img/maps/us.jpeg" alt="us map" />
                </div>
                <p className="searchmap-item-label">
                    United States
                </p>
            </div>
            </div>
        </main>
        <motion.div 
          variants={dropdown}
          initial="hidden"
          animate="visible"
        
        className="searchmap-bar">
                <span className="searchmap-bar-right">When</span><span className="searchmap-bar-left">Add dates</span>
        </motion.div>
        <motion.div
          variants={dropdowndiff}
          initial="hidden"
          animate="visible"
        className="searchmap-bar">
            <span className="searchmap-bar-right">Who</span><span className="searchmap-bar-left">Add guests</span>
        </motion.div>
                    
        </div>
      </motion.div>
    )
}





export default SearchPopSmall
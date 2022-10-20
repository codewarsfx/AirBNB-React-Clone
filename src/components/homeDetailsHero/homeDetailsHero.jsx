import './homehero.css'

const HomeHero =({images})=>{

    return (
          <div className="hero-wrapper">
         <div className="hero-container-image big">
            <img src={images[0]} alt="cabin" />
         </div>
        
          <div className="hero-container-image">
          <img src={images[1]} alt="cabin" />
          </div>
          <div className="hero-container-image">
          <img src={images[2]} alt="cabin" />
          </div>
          <div className="hero-container-image">
          <img src={images[3]} alt="cabin" />
          </div>
          <div className="hero-container-image">
          <img src={images[4]} alt="cabin" />
          </div>
          </div>
      
    )

}

export default HomeHero
import styled from "styled-components"
import './searchmaps.css'

const SearchMaps = ()=>{

    return (
        <Container onClick={ (e)=>e.stopPropagation()}>
           <h3 className="searchmap-title">
            Search by region
           </h3>
           <div className="searchmaps-container">
            <div className="searchmap-item">
                <div className="searchmap-item-image">
                    <img src="/assests/img/maps/world.jpeg" alt="world map" />
                </div>
                <p className="searchmap-item-label">
                    I'm flexible
                </p>
            </div>
            <div className="searchmap-item">
                <div className="searchmap-item-image">
                     <img src="/assests/img/maps/africa.jpeg" alt="africa map" />
                </div>
                <p className="searchmap-item-label">
                    Africa
                </p>
            </div>
            <div className="searchmap-item">
                <div className="searchmap-item-image">
                <img src="/assests/img/maps/middleEast.jpeg" alt="Middle east map" />
                </div>
                <p className="searchmap-item-label">
                    Middle East
                </p>
            </div>
            <div className="searchmap-item">
                <div className="searchmap-item-image">
                <img src="/assests/img/maps/pacific.jpeg" alt="pacific map" />
                </div>
                <p className="searchmap-item-label">
                    Pacific Islands
                </p>
            </div>
            <div className="searchmap-item">
                <div className="searchmap-item-image">
                <img src="/assests/img/maps/uk.jpeg" alt="uk map" />
                </div>
                <p className="searchmap-item-label">
                    United Kingdom
                </p>
            </div>
            <div className="searchmap-item">
                <div className="searchmap-item-image">
                <img src="/assests/img/maps/us.jpeg" alt="us map" />
                </div>
                <p className="searchmap-item-label">
                    United States
                </p>
            </div>
           </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
   justify-content: space-evenly;
   padding: 0 2.5em;
`


export default SearchMaps
import { useState } from 'react'
import SearchMaps from '../SearchMaps/searchMaps'
import './searchPop.css'


const SearchPopTab = ()=>{


    const [isActive, setIsActive] = useState(true)


    const toggleActiveState = (e)=>{
        e.stopPropagation()
        setIsActive(isActive=>!isActive)
    }


    return(
    <div className={`Tab-container ${ isActive && 'active'}`} onClick={toggleActiveState}>
            <div className="tab-items">
                <div className="tab-item ">
                    <div className="tab-item-input-container">
                        <label className='tab-item-paragraph-primary' htmlFor="Search ">Where</label>
                        <input type="text" className='tab-item-input-element' placeholder='Search destinations' />
                    </div>
                </div>
                <div className="tab-item tab-item--center tab-item-center tab-item-center--mod">
                    <p className='tab-item-paragraph-primary'>Check in</p>
                    <p>Add dates</p>
                </div>
                <div className="tab-item tab-item--center tab-item-center ">
                    <p className='tab-item-paragraph-primary'>Check out</p>
                    <p>Add dates</p>
                </div>
                <div className="tab-item ">
                    <div className="tab-item-text">
                        <p className='tab-item-paragraph-primary'>Who</p>
                        <p>Add guests</p>
                    </div>
                    <button className="tab-item-button">
                      <svg className='icon' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path></svg>
                       <span className='tab-item-button-text' >Search</span>
                    </button>
                </div>

            </div>
        { isActive && <div className="tab-dropdown">
            <SearchMaps/>
            </div>}
   </div>
    )



}


export default SearchPopTab
import React from 'react'
import Header from '../greeting/greeting_container'
import SplashPageBottom from '../restofsplashpage'
import SearchBar from '../search/searchbar'
import ImageCarousel from './image_carousel'
const SplashPage = () => {

    return (
        <div className="splash-page">
            {/* <Header/> */}
            <ImageCarousel/>
            <SearchBar/>
            <SplashPageBottom/>
        </div>
    )

}



export default SplashPage
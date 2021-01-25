import React from 'react'
import Header from '../greeting/greeting_container'
import SplashPageBottom from '../restofsplashpage'
import SearchBar from '../search/searchbar'
import ImageCarousel from './image_carousel'

class SplashPage extends React.Component {

    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        this.props.fetchTracks()
    }

    render() {

        return (
            <div className="splash-page">
            {/* <Header/> */}
            <ImageCarousel/>
            <SearchBar/>
            <SplashPageBottom/>
        </div>
    )
}

}



export default SplashPage
import React from 'react'
import Header from '../greeting/greeting_container'
import SplashPageBottom from './restofsplashpage'
import SearchBar from '../search/searchbar'
import ImageCarousel from './image_carousel'

class SplashPage extends React.Component {

    constructor(props){
        super(props)
        debugger
    }

    render() {

        return (
            <div className="splash-page">
            {/* <Header/> */}
            <ImageCarousel/>
            <SearchBar props={this.props}/>
            <SplashPageBottom props={this.props} />
        </div>
    )
}

}



export default SplashPage
import React from 'react'
import Expedia from './Expedia'
import StarWars from './StarWars'
import WeatherApp from './WeatherApp'
import MovieApp from './MovieApp'
import Cocktail from './Cocktail'
import Footer from './Footer'
import WindowBar from './WindowBar'
import Tech from './Tech'

export default function Header() {




  return (
    <>
    <div className="screenWrapper">
        <div className="appWrapper">
            <div className="header" >
                <div className="container">
                    <div className="headerWrapper">
                        <div className="headerItem">

                        </div>
                        <div className="headerItem">
                            <div className="headerLogo">
                                <h1>Nikk7</h1>
                                <span>PORTFOLIO</span>
                            </div>
                            <div className="lineMiddle">
                            </div>
                            <div className="lineSmall">
                            </div>
                        </div>
                        <div className="headerItem">

                        </div>

                    </div>
                </div>
            </div>
            <Expedia/>
            <StarWars/>
            <WeatherApp/>
            <MovieApp/>
            <Cocktail/>
            <Footer/>

        </div>
        <div className="sideBar">
            <WindowBar/>


        </div>
    </div>
        

    </>

  )
}

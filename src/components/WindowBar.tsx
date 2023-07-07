import React from 'react'

export default function WindowBar() {
  return (
    <div className="WindowBar">
      <div className="containerBar">
        <div className="buttonBar">
          <a href='#Expedia'><div className="itemBtn">
            <img src="build/exp1.png" alt="" />
            <span>Expedia</span>
          </div></a>
          <a href='#StarWars'><div className="itemBtn">
            {/* <img src="build/star.png" alt="" />
            <img src="build/wars.png" alt="" /> */}
            <img src="build/sw1.png" alt="" />

            <span>Star Wars</span>

          </div></a>
          <a href='#Weather'><div className="itemBtn">
            {/* <img className='smallImg' src="build/weather.png" alt="" /> */}
            <img src="build/weather1.png" alt="" />

            <span>Weather</span>

          </div></a>
          <a href='#Movie'><div className="itemBtn">
            {/* <img className='smallImg' src="build/tv-maze.png" alt="" /> */}
            <img  src="build/movie1.png" alt="" />

            <span>Movie</span>

          </div></a>
          <a href='#Cocktail'><div className="itemBtn">
            <img src="build/cocktail1.png" alt="" />
            <span>Cocktail</span>

          </div></a>
        </div>

      </div>
        
    </div>
  )
}

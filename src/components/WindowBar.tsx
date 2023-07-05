import React from 'react'

export default function WindowBar() {
  return (
    <div className="WindowBar">
      <div className="containerBar">
        <div className="buttonBar">
          <a href='#Expedia'><div className="itemBtn">
            <img src="exp1.png" alt="" />
            <span>Expedia</span>
          </div></a>
          <a href='#StarWars'><div className="itemBtn">
            {/* <img src="star.png" alt="" />
            <img src="wars.png" alt="" /> */}
            <img src="sw1.png" alt="" />

            <span>Star Wars</span>

          </div></a>
          <a href='#Weather'><div className="itemBtn">
            {/* <img className='smallImg' src="weather.png" alt="" /> */}
            <img src="weather1.png" alt="" />

            <span>Weather</span>

          </div></a>
          <a href='#Movie'><div className="itemBtn">
            {/* <img className='smallImg' src="tv-maze.png" alt="" /> */}
            <img  src="movie1.png" alt="" />

            <span>Movie</span>

          </div></a>
          <a href='#Cocktail'><div className="itemBtn">
            <img src="cocktail1.png" alt="" />
            <span>Cocktail</span>

          </div></a>
        </div>

      </div>
        
    </div>
  )
}

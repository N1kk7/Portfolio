import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { mobileSideBar } from '../redux/modalSlice';



export default function WindowBar() {

  const barState = useSelector((state: any) => state.modal.mobileBar);

  const dispatch = useDispatch();


// const processScrollBar = () => {
//   // console.log("call");
//   dispatch(mobileSideBar("CloseScrollBar"));
//   setTimeout(() => {dispatch(mobileSideBar("CloseScrollBar"))},3500);
  

// }
  // console.log(barState);
  



  return (
    <div className={`WindowBar ${barState ? 'activeMobileBar' : ''}`}>
      <div className="containerBar">
        <div className="buttonBar">
          <a href='#Expedia'><div className="itemBtn" onClick={() => dispatch(mobileSideBar("ActiveBar"))}>
          {/* <a href='#Expedia'><div className="itemBtn" onClick={() => dispatch(mobileSideBar("CloseScrollBar"))}> */}

            <img src="./exp1.png" alt="" />
            <span>Expedia</span>
          </div></a>
          <a href='#StarWars'><div className="itemBtn" onClick={() => dispatch(mobileSideBar("ActiveBar"))}>
            {/* <img src="./star.png" alt="" />
            <img src="./wars.png" alt="" /> */}
            <img src="./sw1.png" alt="" />

            <span>Star Wars</span>

          </div></a>
          <a href='#Weather'><div className="itemBtn" onClick={() => dispatch(mobileSideBar("ActiveBar"))}>
            {/* <img className='smallImg' src="./weather.png" alt="" /> */}
            <img src="./weather1.png" alt="" />

            <span>Weather</span>

          </div></a>
          <a href='#Movie'><div className="itemBtn" onClick={() => dispatch(mobileSideBar("ActiveBar"))}>
            {/* <img className='smallImg' src="./tv-maze.png" alt="" /> */}
            <img  src="./movie1.png" alt="" />

            <span>Movie</span>

          </div></a>
          <a href='#Cocktail'><div className="itemBtn" onClick={() => dispatch(mobileSideBar("ActiveBar"))}>
            <img src="./cocktail1.png" alt="" />
            <span>Cocktail</span>

          </div></a>
        </div>

      </div>
      <div className="arrowBar" onClick={() => dispatch(mobileSideBar("ActiveBar"))}>
        <span>&#8249;</span>
      </div>
        
    </div>
  )
}

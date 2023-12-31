// import React, { useEffect } from 'react'
import { modalFunc } from '../redux/modalSlice'
import { useDispatch, useSelector} from 'react-redux'



export default function Tech(param: any) {
    // console.log(param);
    const dispatch = useDispatch();
    const blockName = useSelector((state: any) => state.modal.blockName);
    // const StarWars = useSelector((state: any) => state.modal.StarWars);
    // const weather = useSelector((state: any) => state.modal.weather);
    let item;



    const activeModal = () => {
        document.body.style.overflow = "hidden"
        // const modalPart = [expedia, StarWars, weather] ;
        // const item = modalPart.forEach((elem) => {
        //     // console.log(elem);
        // })
        // console.log(item);
        switch (blockName) {
            case "expedia": 
                item = <>
                <div className="topItem">
                    {/* <div className="closeBtn">
                        <img src="./cancel.png" alt="" onClick={() => dispatch(modalFunc("closeModal"))}/>
                    </div> */}
                    <div className="blockTittle">
                            <h1>Expedia</h1>
                    </div>

                </div>
                <div className="techItem">
                        <div className="itemContainer">
                            <div className="tItem">
                                <div className="techLogo">
                                    <img src="./html.png" alt="" />
                                </div>
                                <div className="techDes">
                                    <span>HTML</span>
                                </div>
                            </div>
                            <div className="tItem">
                                <div className="techLogo">
                                    <img src="./css.png" alt="" />

                                </div>
                                <div className="techDes">
                                    <span>CSS</span>
                                </div>
                            </div>
                            <div className="tItem">
                                <div className="techLogo">
                                    <img src="./js.svg.png" alt="" />
                                </div>
                                <div className="techDes">
                                    <span>JS</span>
                                </div>
                            </div>
                        </div>
                    </div></>
                break;
            case "StarWars":
                item = <>
                        <div className="topItem">
                            {/* <div className="closeBtn">
                                <img src="./cancel.png" alt="" onClick={() => dispatch(modalFunc("closeModal"))}/>
                            </div> */}
                            <div className="blockTittle">
                                <h1>Star Wars</h1>

                            </div>

                        </div>
                        <div className="techItem">
                            <div className="itemContainer">
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./html.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>HTML</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./css.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>CSS</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./js.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>JS</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./jquery.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>JQuery</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./restApi.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>Api</span>
                                    </div>
                                </div>
                            </div>
                    </div></>
                break;
            case "Weather":
                item = <>
                <div className="topItem">
                            {/* <div className="closeBtn">
                                <img src="./cancel.png" alt="" onClick={() => dispatch(modalFunc("closeModal"))}/>
                            </div> */}
                            <div className="blockTittle">
                                <h1>Weather App</h1>
                            </div>
                        </div>
                        <div className="techItem">
                            <div className="itemContainer">
                            <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./React.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>React</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./sass.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>SASS</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./js.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>JS</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./restApi.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>RestApi</span>
                                    </div>
                                </div>
                            </div>
                    </div></>
                break;
            case "Movie":
                item = <>
                 <div className="topItem">
                            {/* <div className="closeBtn">
                                <img src="./cancel.png" alt="" onClick={() => dispatch(modalFunc("closeModal"))}/>
                            </div> */}
                            <div className="blockTittle">
                                <h1>Movie App</h1>
                            </div>
                        </div>
                        <div className="techItem">
                            <div className="itemContainer">
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./React.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>React</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./sass.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>SASS</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./js.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>JS</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./restApi.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>RestApi</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./Typescript.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>T.Script</span>
                                    </div>
                                </div>
                            </div>
                    </div></>
                break;
            case "Cocktail":
                item = <>
                 <div className="topItem">
                            {/* <div className="closeBtn">
                                <img src="./cancel.png" alt="" onClick={() => dispatch(modalFunc("closeModal"))}/>
                            </div> */}
                            <div className="blockTittle">
                                <h1>Cocktail App</h1>
                            </div>
                        </div>
                        <div className="techItem">
                            <div className="itemContainer">
                            <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./React.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>React</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./sass.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>SASS</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./js.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>JS</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./restApi.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>RestApi</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./Typescript.svg.png" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>T.Script</span>
                                    </div>
                                </div>
                                <div className="tItem">
                                    <div className="techLogo">
                                        <img src="./redux.svg" alt="" />
                                    </div>
                                    <div className="techDes">
                                        <span>Redux</span>
                                    </div>
                                </div>
                            </div>
                    </div></>
                break;

        }
        

    }

    const stateModal = useSelector((state: any) => state.modal.stateModal);
    stateModal ? activeModal()  : document.body.style.overflow = "unset";
        
 
        


  return (
    <>

        {stateModal && <div className="tech">  
            {/* <div className="close-container">
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <label className="close">close</label>
            </div> */}
            <div className="techWrapper">
                
                
                {item}
                <div className="closeButton" onClick={() => dispatch(modalFunc("closeModal"))}>
                    <div className="buttonWrapper">
                        <h2>Close</h2>
                    </div>
                    
                </div>
                {/* <div className="blockTittle">
                    <h1>Expedia</h1>
                </div>
                <div className="techItem">
                    <div className="itemContainer">
                        <img src="./html.png" alt="" />
                        <img src="./css.png" alt="" />
                        <img src="./js.svg.png" alt="" />
                        <img src="./js.svg.png" alt="" />
                        <img src="./js.svg.png" alt="" />

                        

                    </div>
                </div> */}

            </div>
            <div className="techBg"></div>
        </div>}
    
    </>
    
  )
}

import React from 'react'






export default function WeatherApp() {






  return (
    <div className="WeatherApp" id='Weather'>
        <div className="blockWrapper">
            
            <div className="infoBlock">
                <div className="infoBlockWrapper">
                    <div className="tittleBlock">
                        <h1>Weather Ukraine</h1>
                    </div>
                    <div className="border"></div>
                    <div className="descriptionBlock">
                        <p>Weather project is my firs react app with use weather api. You will can get forecast to next five day.
                            UI is done in minimalism style and user friendly to daily use.
                        </p>
                    </div>
                    <div className="buttons">
                        <a className="btn " href="@" role='button'>Tech</a>

                        <a className="btn " href="https://n1kk7.github.io/Expedia/dev/">Weather</a>

                        <a className="btn " href="https://n1kk7.github.io/Expedia/">Github</a>


                </div>
                </div>
                
            </div>
            <div className="images">
                <div className="bgImg">
                    <img src="./goldBg.jpg" alt="" />
                </div>
                <div className="gridWrapper">
                <div className="grid-container">
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Kharkiv</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg' src="./n-kharkiv.jpeg" alt="" />}
                    </div>
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Odesa</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg' src="./n-Odessa.jpeg" alt="" />}
                    </div>
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Dnipro</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg' src="./n-dnipro.jpeg" alt="" />}
                    </div>
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Chernihiv</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg right-8' src="./n-chernihiv.jpeg" alt="" />}
                    </div>
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Zhytomyr</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg right-8 bottom-8' src="./n-Zhytomyr.jpeg" alt="" />}
                    </div>
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Poltava</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg right-12' src="./n-Poltava.jpeg" alt="" />}
                    </div>
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Kherson</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg ' src="./n-Kherson.jpeg" alt="" />}
                    </div>
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Kyiv</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg smallImg' src="./n-Kyiv.jpeg" alt="" />}
                    </div>
                    <div
                        className="grid-item flex flex-col rounded-xl border-gray-300 hover:ring-brand ring-2 ring-gray-300 hover:border-gray-500 overflow-hidden shadow-xl max-wv-9 min-hv-1 max-hv-9 border-1">
                        <div
                            className="tittleBlock h-14 bg-blue-500  transition-all gap-2 p-4 flex flex-row items-center z-10">
                            <div className="cityTittle">
                                <span className="cityName flex-grow font-bold text-xl">Zaporizhia</span>
                            </div>
            

                        </div>
            

                        {/* {/* {!props.style && <img className='cartImg' src={e.dImg} alt="" />} */}
                        {<img className='cartImg' src="./n-Zaporizhia.jpeg" alt="" />}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

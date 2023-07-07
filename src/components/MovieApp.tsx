import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade } from "swiper";



export default function MovieApp() {

    SwiperCore.use([Autoplay]);



  return (


    <div className="MovieApp" id='Movie'>
        <div className="blockWrapper">
            <div className="images">
                <div className="bgImg">
                    <img src="./revertGoldBg.png" alt="" />
                </div>
                <Swiper
                    autoplay={{ delay: 5000 }}
                    spaceBetween={30}
                    effect={"fade"}
                    // navigation={true}
                    // pagination={{
                    // clickable: true,
                    // }}
                    modules={[EffectFade]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        {/* <img className='coverImage' src="./movie1.png" alt="" /> */}
                        <img  src="./movie1.png" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img className='coverImage' src="./movie2.png" alt=""/> */}
                        <img  src="./movie2.png" alt=""/>

                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img className='coverImage' src="./movie3.png" alt="" /> */}
                        <img src="./movie3.png" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src="./movie4.png" alt="" />
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className="infoBlock">
                    <div className="infoBlockWrapper">
                        <div className="tittleBlock">
                            <h1>Movie App</h1>
                        </div>
                        <div className="border"></div>
                        <div className="descriptionBlock">
                            <p>This project was last task when i study in Hillel IT Scholl. 
                                Project gets parameters from api.
                            </p>
                        </div>
                        <div className="buttons">
                            <a className="btn " href="@" role='button'>Tech</a>

                            <a className="btn " href="https://n1kk7.github.io/Expedia/dev/">Movie App</a>

                            <a className="btn " href="https://n1kk7.github.io/Expedia/">Github</a>

                    </div>
                </div>    
            </div>    
        </div>
    </div>
  )
}

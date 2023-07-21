import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { modalFunc, mobileSideBar } from '../redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade } from "swiper";



export default function MovieApp() {
    const barState = useSelector((state: any) => state.modal.mobileBar);
    const dispatch = useDispatch();

const btn = () => {
    if (barState) {
        dispatch(mobileSideBar("ActiveBar"));
    }
    dispatch(modalFunc("Movie"));

}
    SwiperCore.use([Autoplay]);



  return (


    <div className="MovieApp" id='Movie'>
        <div className="blockWrapper">
            <div className="images">
                <div className="bgImg">
                    {/* <img src="./revertGoldBg.png" alt="" /> */}
                    <picture>
                        <source srcSet="./goldBg-mobile.jpg" media="(max-width: 700px)" />
                        <img src="./goldBg.jpg" alt="" />
                    </picture>
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
                        {/* <img  src="./movie1.png" alt="" /> */}
                        <picture>
                            <source srcSet="./movie1-mobile.png" media="(max-width: 700px)" />
                            <img src="./movie1.png" alt="" />
                        </picture>

                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img className='coverImage' src="./movie2.png" alt=""/> */}
                        {/* <img  src="./movie2.png" alt=""/> */}
                        <picture>
                            <source srcSet="./movie2-mobile.png" media="(max-width: 700px)" />
                            <img src="./movie2.png" alt="" />
                        </picture>

                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img className='coverImage' src="./movie3.png" alt="" /> */}
                        {/* <img src="./movie3.png" alt="" /> */}
                        <picture>
                            <source srcSet="./movie3-mobile.png" media="(max-width: 700px)" />
                            <img src="./movie3.png" alt="" />
                        </picture>

                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img  src="./movie4.png" alt="" /> */}
                        <picture>
                            <source srcSet="./movie4-mobile.png" media="(max-width: 700px)" />
                            <img src="./movie4.png" alt="" />
                        </picture>
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
                            <div className="btn "  role='button' onClick={() => btn()}>Tech</div>

                            <a className="btn " href="https://n1kk7.github.io/movieApp/build/">Movie App</a>

                            <a className="btn " href="https://github.com/N1kk7/movieApp">Github</a>

                    </div>
                </div>    
            </div>    
        </div>
    </div>
  )
}

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


import { EffectFade } from "swiper";

export default function Cocktail() {
  const barState = useSelector((state: any) => state.modal.mobileBar);
  const dispatch = useDispatch();



  SwiperCore.use([Autoplay]);




const btn = () => {
    if (barState) {
        dispatch(mobileSideBar("ActiveBar"));
    }
    dispatch(modalFunc("Cocktail"));
}


  return (
    <div className="Cocktail" id='Cocktail'>
      <div className="blockWrapper">
            
            <div className="infoBlock">
                <div className="infoBlockWrapper">
                    <div className="tittleBlock">
                        <h1>Cocktail</h1>
                    </div>
                    <div className="border"></div>
                    <div className="descriptionBlock">
                        <p>Cocktail app is allowed you give the information how to prepare any alcohol and without alcohol cocktails.
                          There is a search bar, search from first letter of name cocktail. Api gives more then 1000 cocktails recepy.
                          And without cocktail there is a ingredient map.
                        </p>
                    </div>
                    <div className="buttons">
                        <div className="btn "  role='button' onClick={() => btn()}>Tech</div>

                        <a className="btn " href="https://n1kk7.github.io/cocktail/build/">Cocktail</a>

                        <a className="btn " href="https://github.com/N1kk7/cocktail">Github</a>


                    </div>
                </div>  
            </div>
            <div className="images">
                <div className="bgImg">
                    {/* <img src="./goldBg.jpg" alt="" /> */}
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
                        {/* <img src="./cocktail1.png" alt="" /> */}
                        <picture>
                            <source srcSet="./cocktail1-mobile.png" media="(max-width: 700px)" />
                            <img src="./cocktail1.png" alt="" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="./cocktail2.png" alt=""/>
                         */}
                          <picture>
                            <source srcSet="./cocktail2-mobile.png" media="(max-width: 700px)" />
                            <img src="./cocktail2.png" alt="" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="./cocktail6.png" alt="" /> */}
                        <picture>
                            <source srcSet="./cocktail3-mobile.png" media="(max-width: 700px)" />
                            <img src="./cocktail3.png" alt="" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="./cocktail4.png" alt="" /> */}
                        <picture>
                            <source srcSet="./cocktail4-mobile.png" media="(max-width: 700px)" />
                            <img src="./cocktail4.png" alt="" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="./cocktail5.png" alt="" /> */}
                        <picture>
                            <source srcSet="./cocktail5-mobile.png" media="(max-width: 700px)" />
                            <img src="../cocktail5.png" alt="" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="./cocktail3.png" alt="" /> */}
                        <picture>
                            <source srcSet="./cocktail6-mobile.png" media="(max-width: 700px)" />
                            <img src="./cocktail6.png" alt="" />
                        </picture>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>


    </div>
  )
}

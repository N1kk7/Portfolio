import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import { modalFunc } from '../redux/modalSlice';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch} from 'react-redux';



// import goldBg from './goldBg.jpg'

// import "./styles.css";

// import required modules
import { EffectFade } from "swiper";
import Tech from './Tech';
// import Tech from './Tech';

export default function Expedia() {

    // const [modal, setModal] = useState(false);
    // const modal = useSelector((state:any) => state.modal);
    const dispatch = useDispatch();

    // console.log(modal)

    SwiperCore.use([Autoplay]);




  return (
    <div className="Expedia" id='Expedia'>
        <div className="blockWrapper">
            
            <div className="infoBlock">
                <div className="infoBlockWrapper">
                    <div className="tittleBlock">
                        <h1>Expedia</h1>
                    </div>
                    <div className="border"></div>
                    <div className="descriptionBlock">
                        <p>This is one of my first project. In that time im started to learn JavaScript and tried to use html css and js together.
                            On this website youll can see on any responsive screen included mobile screen.
                        </p>
                    </div>
                    <div className="buttons">
                        <div className="btn "   role='button' onClick={() => dispatch(modalFunc("expedia"))}>Tech</div>

                        <a className="btn " href="https://n1kk7.github.io/Expedia/dev/">Expedia</a>

                        <a className="btn " href="https://github.com/N1kk7/Expedia">Github</a>


                    </div>
                </div>  
            </div>
            <div className="images">
                <div className="bgImg">
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
                        {/* <img src="./exp1.png" alt="" /> */}
                        <picture>
                            <source srcSet="./exp1-mobile.png" media="(max-width: 700px)" />
                            <img src="./exp1.png" alt="" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img className='coverImage' src="./exp2.png" alt=""/> */}
                        {/* <img src="./exp2.png" alt=""/> */}
                        <picture>
                            <source srcSet="./exp2-mobile.png" media="(max-width: 700px)" />
                            <img src="./exp2.png" alt="" />
                        </picture>


                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img className='coverImage' src="./exp3.png" alt="" /> */}
                        {/* <img src="./exp3.png" alt="" /> */}
                        <picture>
                            <source srcSet="./exp3-mobile.png" media="(max-width: 700px)" />
                            <img src="./exp3.png" alt="" />
                        </picture>

                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img src="./exp4.png" alt="" /> */}
                        <picture>
                            <source srcSet="./exp4-mobile.png" media="(max-width: 700px)" />
                            <img src="./exp4.png" alt="" />
                        </picture>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <Tech />
        {/* {modal && <Tech param={"expedia"}/>} */}
    </div>
  )
}

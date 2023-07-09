
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import { EffectCube } from "swiper";
import { useEffect } from "react";
import { useRef } from "react";

import React from "react";


export default function StarWars() {
    SwiperCore.use([Autoplay]);
    let canvasRef:any = useRef<HTMLCanvasElement>(null);
    


// const canvasAnimation = () => {

    
  

//     // console.log(canvas.getConte); 

  
//   if(canvasRef.current) {
//     let canvas = canvasRef.current;
//     canvasRef.width = canvasRef.innerWidth;
//     canvasRef.height = canvasRef.innerHeight;

//     let ctx = canvas.getContext('2d');
//     let w = canvas.width;
//     let h = canvas.height;
//     let animationFrameId:any;
//     ctx.strokeStyle = 'rgba(174,194,224,0.5)';
//     ctx.lineWidth = 1;
//     ctx.lineCap = 'round';
    
    
//     let init = [];
//     let maxParts = 1000;
//     for(let a = 0; a < maxParts; a++) {
//       init.push({
//         x: Math.random() * w,
//         y: Math.random() * h,
//         l: Math.random() * 1,
//         xs: -4 + Math.random() * 4 + 2,
//         ys: Math.random() * 10 + 10
//       })
//     }
    
//     var particles:any = [];
//     for(let b = 0; b < maxParts; b++) {
//       particles[b] = init[b];
//     }
    
//     const draw = () => {
//       ctx.clearRect(0, 0, w, h);
//       for(let c = 0; c < particles.length; c++) {
//         let p = particles[c];
//         ctx.beginPath();
//         ctx.moveTo(p.x, p.y);
//         ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
//         ctx.stroke();
//       }
//       move();
//     }
    
//     const move = () => {
//       for(let b = 0; b < particles.length; b++) {
//         let p = particles[b];
//         p.x += p.xs;
//         p.y += p.ys;
//         if(p.x > w || p.y > h) {
//           p.x = Math.random() * w;
//           p.y = -20;
//         }
//       }
//     }

//     const render = () => {
//         setInterval(draw, 30);
//         animationFrameId = window.requestAnimationFrame(render);
//     }
//     render();
//     return () => {
//         window.cancelAnimationFrame(animationFrameId);
//     }
    
//   }

// }











useEffect(() => {
    if (canvasRef.current) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'green';
    //   ctx.fillText('Y', 50, 50);
    //   console.log(canvas);
      var w = canvas.width;
    var h = canvas.height;
    ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    
    
    var init = [];
    var maxParts = 100;
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h/4,
        l: Math.random() * 1/7,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      })
    }
    
    var particles:any = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for(var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }
    
    const move = () => {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }
    
    setInterval(draw, 80);

    
    // canvasAnimation();
    }
},[]);


  return (
    <div className="StarWars" id="StarWars">
        <div className="blockWrapper" >
            <div className="bgImg">
                <img src="./revertGoldBg.png" alt="" />
            </div>
            <div className="images" >
                
                <canvas ref={canvasRef} className="canvasRain"></canvas>
                <div className="light">
                    <img src="./light.png" alt="" />

                </div>
                <Swiper
                    autoplay={{ delay: 5000 }}
                    effect={"cube"}
                    grabCursor={true}
                    // cubeEffect={{
                    // shadow: true,
                    // slideShadows: true,
                    // shadowOffset: 20,
                    // shadowScale: 0.94,
                    // }}
                    // pagination={true}
                    // modules={[EffectCube]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="imageWrapper">
                            <div className="left-image">
                                <img className="image imgBottom" src="./films1.png" alt="" />
                            </div>
                            <div className="right-image">
                                <img className="image imgBottom" src="./films1.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imageWrapper imageDown">
                            <div className="left-image">
                                <img className="image"  src="./vehicles1.png" alt=""/>

                            </div>
                            <div className="right-image">
                                <img className="image"  src="./vehicles1.png" alt=""/>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imageWrapper imageDown">
                            <div className="left-image">
                                <img className="image"  src="./people1.png" alt="" />

                            </div>
                            <div className="right-image">
                                <img className="image"  src="./people1.png" alt="" />
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imageWrapper">
                            <div className="left-image">
                                <img className="image imgBottom"  src="./films2.png" alt="" />

                            </div>
                            <div className="right-image">
                                <img className="image imgBottom"  src="./films2.png" alt="" />
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imageWrapper imageDown">
                            <div className="left-image">
                                <img className="image"  src="./vehicles2.png" alt="" />

                            </div>
                            <div className="right-image">
                                <img className="image"  src="./vehicles2.png" alt="" />
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="imageWrapper imageDown">
                            <div className="left-image">
                                <img className="image"  src="./people2.png" alt="" />

                            </div>
                            <div className="right-image">
                                <img className="image"  src="./people2.png" alt="" />
                                
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className="infoBlock">
                <div className="infoBlockWrapper">
                    <div className="tittleBlock tittle-right">
                        <h1>Star Wars</h1>
                    </div>
                    <div className="border " style={{width: "unset"}}></div>
                    <div className="descriptionBlock">
                        <p>In this project i had experience of use jquery and easy keyframe animation. 
                            All information in this app get in external api. 
                            But sometimes this api is requesting parameters too long. 
                        </p>
                    </div>
                    <div className="buttons">
                        <a className="btn " href="@" role='button'>Tech</a>

                        <a className="btn " href="https://n1kk7.github.io/Expedia/dev/">Star Wars</a>

                        <a className="btn " href="https://n1kk7.github.io/Expedia/">Github</a>


                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

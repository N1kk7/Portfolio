// import React, { useEffect} from 'react';
import './App.scss';
import Header from './components/Header';
import './mediaScreen.scss'
// import { mobileSideBar } from './redux/modalSlice';
// import { useDispatch, useSelector } from 'react-redux';


function App() {
// const dispatch = useDispatch();
// const mobileBar = useSelector((state: any) => state.modal.mobileBar);
// const closeScrollBar = useSelector((state: any) => state.modal.closeScrollBar);



//   useEffect(() => {
//     let timeout:any;
//     // const func = setTimeout(() => {
//     //   console.log("ololo");
      
//     // },3500);
    



//     const handleScroll = (event: any) => {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => {
//       // setStateBar(false);

//       dispatch(mobileSideBar("RemoveBar"))
      
//     }, 1500)

//     if(!mobileBar ) {
//       // setStateBar(true);
//         setTimeout(() => {dispatch(mobileSideBar("ActiveBar"))}, 200);


//       // console.log("active bar");
      
//     }

//       // clearTimeout(func);

      
      
// // func();
// // const ololo = () => {

// // }


//       // console.log(event);
      
      

//       // const scrollEvent = event.isTrusted;
//       // setScrollTop(window.scrollY);
//     // console.log(event.isTrusted);
    
//       // setTimeout((i: any) => {
//       //   // console.log(stateBar);

//       //   // if(stateBar === true) {
//       //   // console.log(stateBar);

//       //   setStateBar(false);

//       //     // timeout = 3500;
//       //   dispatch(mobileSideBar("RemoveBar"))

//       //   // console.log("remove bar");


//       //   // }
        
//       // },timeout);

//     }
//     if (!closeScrollBar){
//       window.addEventListener('scroll', handleScroll);

//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };



//     }

   
//   }, []);


  return (
      <div className="App" >
        <Header/>
      
      </div>
  );
}

export default App;

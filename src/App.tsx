import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import './mediaScreen.scss'


function App() {

//   const scroll = (event: any) => {
//     console.log(event)

// }

// const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    
    const handleScroll = (event: any) => {
      // const scrollEvent = event.isTrusted;
      // setScrollTop(window.scrollY);
    // console.log(event.isTrusted);
      setTimeout((i: any) => {
        console.log("test");
        
      },3500);

    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // console.log(scrollTop)
  // onScrollCapture={(event) => scroll(event)}

  return (
      <div className="App" >
        <Header/>
      
      </div>
  );
}

export default App;

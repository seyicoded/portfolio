import React, { useEffect, useRef, useState } from 'react'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

export default function Head() {

  const list = [
    "Senior Software Developer",
    "FullStack Developer",
    "React Native Developer",
    "Tech Coach"
  ]

  const [activeList, setActiveList] = useState(0)
  const [toggle, setToggle] = useState(false)
  const timeRef = useRef(null);
  const countRef = useRef(0);

  const changer = ()=> {
    const max = (list.length);
    if((activeList + 1) < max ){
      setActiveList( activeList + 1 );
      countRef.current = activeList + 1;
    }else{
      setActiveList( 0 )
      countRef.current = 0;
    }

    setToggle(!toggle)

    // timeRef.current = setTimeout(()=> changer(), 3000)
  }

  // looper
  useEffect(() => {
    
    timeRef.current = setTimeout(()=> changer(), 3000)

    return () => {
      clearTimeout(timeRef.current)
    }
  }, [activeList])
  

  return (
    <div>
        
  {/* <div id="hero" className="hero route bg-image" style="background-image: url(DevFolio/assets/img/hero-bg.jpg)"> */}
  <div id="hero" className="hero route bg-image" style={{ backgroundImage: 'url(DevFolio/assets/img/hero-bg.jpg)', backgroundSize: 'cover' }}>
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          
          <h1 className="hero-title mb-4">I am Opadonu Emmanuel Oluwaseyi</h1>
          <p className="hero-subtitle">
          <AutoTyping
            active // <boolean>
            textRef={list[countRef.current]} // <string>
            writeSpeed={150} // <number>
            deleteSpeed={150} // <number>
            delayToWrite={1000} // <number>
            delayToDelete={2000} // <number>
            />
            <BlinkCursor
            active // <boolean>
            blinkSpeed={500} // <number>
            />
            {/* Developer */}
            {/* <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span> */}
            </p>
          
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

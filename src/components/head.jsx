import React from 'react'

export default function Head() {
  return (
    <div>
        
  {/* <div id="hero" className="hero route bg-image" style="background-image: url(DevFolio/assets/img/hero-bg.jpg)"> */}
  <div id="hero" className="hero route bg-image" style={{ backgroundImage: 'url(DevFolio/assets/img/hero-bg.jpg)' }}>
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          
          <h1 className="hero-title mb-4">I am Morgan Freeman</h1>
          <p className="hero-subtitle"><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

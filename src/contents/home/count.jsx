import React from 'react'

export default function Count() {
  return (
    <div className="section-counter paralax-mf bg-image" style={{ backgroundImage: "url(DevFolio/assets/img/counters-bg.jpg)" }}>
  <div className="overlay-mf"></div>
  <div className="container position-relative">
    <div className="row">
      <div className="col-sm-3 col-lg-3">
        <div className="counter-box counter-box pt-4 pt-md-0">
          <div className="counter-ico">
            <span className="ico-circle"><i className="bi bi-check"></i></span>
          </div>
          <div className="counter-num">
            <p data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1" className="counter purecounter">x &gt; 50</p>
            <span className="counter-text">WORKS COMPLETED</span>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-lg-3">
        <div className="counter-box pt-4 pt-md-0">
          <div className="counter-ico">
            <span className="ico-circle"><i className="bi bi-journal-richtext"></i></span>
          </div>
          <div className="counter-num">
            <p data-purecounter-start="0" data-purecounter-end="9" data-purecounter-duration="1" className="counter purecounter">9</p>
            <span className="counter-text">YEARS OF EXPERIENCE</span>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-lg-3">
        <div className="counter-box pt-4 pt-md-0">
          <div className="counter-ico">
            <span className="ico-circle"><i className="bi bi-people"></i></span>
          </div>
          <div className="counter-num">
            <p data-purecounter-start="0" data-purecounter-end="550" data-purecounter-duration="1" className="counter purecounter">x &gt; 20</p>
            <span className="counter-text">TOTAL CLIENTS</span>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-lg-3">
        <div className="counter-box pt-4 pt-md-0">
          <div className="counter-ico">
            <span className="ico-circle"><i className="bi bi-award"></i></span>
          </div>
          <div className="counter-num">
            <p data-purecounter-start="0" data-purecounter-end="48" data-purecounter-duration="1" className="counter purecounter">3</p>
            <span className="counter-text">AWARD WON</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

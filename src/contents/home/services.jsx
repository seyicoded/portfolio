import React from 'react'

export default function Services() {
  return (
    <section id="services" className="services-mf pt-5 route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="title-box text-center">
          <h3 className="title-a">
            Services
          </h3>
          <p className="subtitle-a">
            A list of my essentials core, itemized for you all.
          </p>
          <div className="line-mf"></div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-phone"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Mobile Development</h2>
            <p className="s-description text-center">
              With expertised on creating both mobile core native application and cross platform application, I got you.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Web Development</h2>
            <p className="s-description text-center">
              being fullstacked, able to process both front-end and back-end, gateway bridge i'll say you've come to the right person
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-bar-chart"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Database Analyst</h2>
            <p className="s-description text-center">
              Currently experience with Mysql, PostgreSql, Cassandra, MongoDB, Firebase (firestore/RT), MsSql
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-binoculars"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Responsive Designer</h2>
            {/* <p className="s-description text-center">
              Essentials layouting would always be considered in every and any project i work on.
            </p> */}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-brightness-high"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Server Anaylst</h2>
            {/* <p className="s-description text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
              provident vitae! Magni
              tempora perferendis eum non provident.
            </p> */}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-calendar4-week"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Tech Coach</h2>
            {/* <p className="s-description text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
              provident vitae! Magni
              tempora perferendis eum non provident.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

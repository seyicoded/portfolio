import React from 'react'

export default function About() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="box-shadow-full">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-5">
                  <div className="about-img">
                    <img src="DevFolio/assets/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-7">
                  <div className="about-info">
                    <p><span className="title-s">Name: </span> <span>Opadonu Oluwaseyi</span></p>
                    <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                    <p><span className="title-s">Email: </span> <span>opadonuseyi01@gmail.com</span></p>
                    <p><span className="title-s">Phone: </span> <span>(234) (0) 814 4539 649</span></p>
                  </div>
                </div>
              </div>
              <div className="skill-mf">
                <p className="title-s">Skill</p>
                <span>Mobile Development:</span> <span className="pull-right">95%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>Web Development: (FullStack)</span> <span className="pull-right">86%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: "86%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>Desktop Development</span> <span className="pull-right">50%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>Tech Enthusiast</span> <span className="pull-right">90%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">
                    About me
                  </h5>
                </div>
                <p className="lead">
                Hey, I am a highly competent software developer with ten (10) years’ experience developing a wide range of
tools for both Web and Android for a range of clients. I have proven expertise in building educational,
Management and Organization apps. 
                </p>
                <p className="lead">
                Am well vast in project lifecycle in depth and am very capable
at all aspects of development from project planning to requirements gathering through to writing
and testing code, creating documentation and support.
                </p>
                <p className="lead">
                    I am currently available and seeking any kind of contract engagements, Thanks😎.                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

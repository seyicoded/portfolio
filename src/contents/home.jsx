import React, { useState } from 'react'
import About from './home/about'
import Count from './home/count'
import Services from './home/services'
import Testi from './home/testi'
import Work from './home/work'

export default function HomeContent() {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [subject, setsubject] = useState("")
  const [message, setmessage] = useState("")
  return (
    <div>
        <main id="main">

          <About />

          <Services />

          <Count />

          <Work />

          <Testi />



<section id="blog" className="blog-mf sect-pt4 route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="title-box text-center">
          <h3 className="title-a">
            Blog
          </h3>
          <p className="subtitle-a">
            <a href='#'>click to visit my blog</a>.
          </p>
          <div className="line-mf"></div>
        </div>
      </div>
    </div>
    {/* <div className="row">
      <div className="col-md-4">
        <div className="card card-blog">
          <div className="card-img">
            <a href="blog-single.html"><img src="DevFolio/assets/img/post-1.jpg" alt="" className="img-fluid" /></a>
          </div>
          <div className="card-body">
            <div className="card-category-box">
              <div className="card-category">
                <h6 className="category">Travel</h6>
              </div>
            </div>
            <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
            <p className="card-description">
              Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
              a pellentesque nec,
              egestas non nisi.
            </p>
          </div>
          <div className="card-footer">
            <div className="post-author">
              <a href="#">
                <img src="DevFolio/assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                <span className="author">Morgan Freeman</span>
              </a>
            </div>
            <div className="post-date">
              <span className="bi bi-clock"></span> 10 min
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-blog">
          <div className="card-img">
            <a href="blog-single.html"><img src="DevFolio/assets/img/post-2.jpg" alt="" className="img-fluid" /></a>
          </div>
          <div className="card-body">
            <div className="card-category-box">
              <div className="card-category">
                <h6 className="category">Web Design</h6>
              </div>
            </div>
            <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
            <p className="card-description">
              Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
              a pellentesque nec,
              egestas non nisi.
            </p>
          </div>
          <div className="card-footer">
            <div className="post-author">
              <a href="#">
                <img src="DevFolio/assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                <span className="author">Morgan Freeman</span>
              </a>
            </div>
            <div className="post-date">
              <span className="bi bi-clock"></span> 10 min
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card card-blog">
          <div className="card-img">
            <a href="blog-single.html"><img src="DevFolio/assets/img/post-3.jpg" alt="" className="img-fluid" /></a>
          </div>
          <div className="card-body">
            <div className="card-category-box">
              <div className="card-category">
                <h6 className="category">Web Design</h6>
              </div>
            </div>
            <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
            <p className="card-description">
              Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
              a pellentesque nec,
              egestas non nisi.
            </p>
          </div>
          <div className="card-footer">
            <div className="post-author">
              <a href="#">
                <img src="DevFolio/assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                <span className="author">Morgan Freeman</span>
              </a>
            </div>
            <div className="post-date">
              <span className="bi bi-clock"></span> 10 min
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</section>

<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(DevFolio/assets/img/overlay-bg.jpg)" }}>
  <div className="overlay-mf"></div>
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="contact-mf">
          <div id="contact" className="box-shadow-full">
            <div className="row">
              <div className="col-md-6">
                <div className="title-box-2">
                  <h5 className="title-left">
                    Send Message Us
                  </h5>
                </div>
                <div>
                  <form role="form" className="php-email-form" onSubmit={()=> {return false}}>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={e => setname(e.target.value)} value={name} required />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={e => setemail(e.target.value)} value={email} required />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={e => setsubject(e.target.value)} value={subject} required />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" name="message" rows="5" placeholder="Message" onChange={e => setmessage(e.target.value)} required>{message}</textarea>
                        </div>
                      </div>
                      <div className="col-md-12 text-center my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="col-md-12 text-center">
                        <button
                          type="button"
                          className="button button-a button-big button-rouded"
                          onClick={()=>{

                            window.location.href = (`mailto:opadonuseyi01@gmail.com?subject=${subject}&body=by&20${name}&20email:${email}&20message:&20${message}`);
                          }}>Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="title-box-2 pt-4 pt-md-0">
                  <h5 className="title-left">
                    Get in Touch
                  </h5>
                </div>
                <div className="more-info">
                  <p className="lead">
                    Feel free to call, chat, email, sms, ping, <span style={{ textDecoration: "line-through" }}>flash</span> me, i'm always available to facilitate your project acertain it potentials.
                  </p>
                  <ul className="list-ico">
                    <li><span className="bi bi-geo-alt"></span> Federal Capital Territory, Nigeria</li>
                    <li><span className="bi bi-phone"></span> (234) 814 4539 649</li>
                    <li><span className="bi bi-envelope"></span> opadonuseyi01@gmail.com</li>
                  </ul>
                </div>
                <div className="socials">
                  <ul>
                    <li><a href="https://wa.me/2348144539649"><span className="ico-circle"><i className="bi bi-whatsapp"></i></span></a></li>
                    <li><a href=""><span className="ico-circle"><i className="bi bi-medium"></i></span></a></li>
                    <li><a href="https://www.github.com/seyicoded"><span className="ico-circle"><i className="bi bi-github"></i></span></a></li>
                    <li><a href="https://www.linkedin.com/in/opadonu-seyi-9b873617b"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</main>
    </div>
  )
}

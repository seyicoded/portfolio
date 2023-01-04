import React, { useEffect, useState } from 'react'

export default function Header() {

  const [bg, setBg] = useState('transparent')
  useEffect(()=>{
    window.onscroll = ()=>{
      const windowHeight = window.screen.availHeight;
      const scrollHeight = window.scrollY;
      // console.log(`windowHeight: ${windowHeight}, scrollHeight: ${scrollHeight}`)

      if(scrollHeight > windowHeight){
        setBg('black')
      }else{
        setBg('transparent')
      }
    }
  }, [])
  return (
    <div>
        
  <header id="header" className="fixed-top" style={{ backgroundColor: bg }}>
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html">SeyiCoded</a></h1>
      
      

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#work">Work</a></li>
          <li><a className="nav-link scrollto " href="#blog">Blog</a></li>
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>
  )
}

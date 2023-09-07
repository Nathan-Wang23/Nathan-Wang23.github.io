/** @jsx */

import React from 'react';
import './middle.css';
import FooterButton from './footer';

var lastY = 0

let sty = {
  height: "40vh",
  width: "30vh",
  float: "left",
  padding: "30px",
  marginTop: "10px",
  marginBottom: "10px",
  marginRight: "10px",
  marginLeft: "-50%",
  justifyContent: "center",
  alignItems: "start",
};

class Middle extends React.Component {
  state = {
    page: 0,
    pages: ["home", "about", "resume", "experience", "projects", "contact"],
    aboutStyle: {
      height: "40vh",
      width: "30vh",
      float: "left",
      padding: "30px",
      marginTop: "10px",
      marginBottom: "10px",
      marginRight: "10px",
      marginLeft: "40%",
      justifyContent: "center",
      alignItems: "start",
    }
  }


  listenScrollEvent = e => {
    let currentY = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    if (window.scrollY >= 0 && window.scrollY < 7347) {

    } else {
      currentY = window.scrollY
    }

    let total = 0
    for (let i = 0; i < this.state.pages.length; i++) {
      let pageHeight = document.getElementById(this.state.pages[i]).getBoundingClientRect().height;
      if (window.scrollY >= total && window.scrollY < total + pageHeight) {
        this.setState({
          page: i
        });
      }
      //if (window.scrollY >= total + pageHeight*0.95 && window.scrollY < total + pageHeight*1.05) {
      //  let diff = 1
      //  if (total + pageHeight - lastY < 0) {
      //    diff = 0
      //  }
      //  let delta = currentY - lastY
      //  if (delta < 10) {
      //    currentY = lastY + delta*0.5 + 0.5*delta*diff
      //  }
      //}
      if (this.state.pages[i] === "about" && window.scrollY >= total - pageHeight/2 && window.scrollY < total + pageHeight/2) {
        let delta = currentY - lastY
        let positionInFrame = window.scrollY - total + pageHeight/2
        let halfway = pageHeight / 2
        let ratio = 90 / halfway
        let x = 0
        if (positionInFrame < halfway) {
          x = ratio * delta
        } else {
          x = ratio * delta * -1.0
        }
        let newPercentage = parseFloat(sty.marginLeft.slice(0,-1)) + x
        sty = {
          height: "40vh",
          width: "30vh",
          float: "left",
          padding: "30px",
          marginTop: "10px",
          marginBottom: "10px",
          marginRight: "10px",
          marginLeft: `${newPercentage}%`,
          justifyContent: "center",
          alignItems: "start",
        };
      } else if (this.state.pages[i] === "about" && (window.scrollY < total - pageHeight/2 || window.scrollY >= total + pageHeight/2)) {
        sty = {
          height: "40vh",
          width: "30vh",
          float: "left",
          padding: "30px",
          marginTop: "10px",
          marginBottom: "10px",
          marginRight: "10px",
          marginLeft: "-50%",
          justifyContent: "center",
          alignItems: "start",
        };
      }
      total += pageHeight
    }
    window.scrollTo(scrollLeft, currentY);
    lastY = currentY
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => this.listenScrollEvent(e));
    //if (this.props.init) {
    //  window.scrollY = document.getElementById("root").getBoundingClientRect().height;
    //}
  }


  render() {
    return (
      <div>
        <main>
        <section id="home">
          <div id="appHead" className="AppHeader">
            <h1 className="header">
              Nathan Wang
            </h1>
          </div>
        </section>

        <section id="about">
          {/*<div className="AboutBlur"></div>*/}
            <div className='AboutTitle'>
              <h1> About Me </h1>
              <div className='about-content'>
                <div className="imageLeft" style={{...sty}}>
                  <img id="profile" className="prof" alt="profile" src="/photos/profile.jpeg"></img>
                </div>
                <div className='textRight'>
                  <h3>Georgia Institute of Technology</h3>
                  <p>Bachelor of Science, Computer Science</p>
                  <p>GPA: 3.92/4.0</p>
                  <p>Expected Masters of Science, Computer Science Degree: May 2024</p>
                  <p>Location: Los Altos, CA</p>
                </div>
            </div>
          </div>

        </section>


        <section id="resume">
          <div className="ResumeBlur"></div>
            <div className="resumePopout">
              <h1> Resume </h1>
              <div className='resume-content'>
                <img alt="resume_nathan" src='/photos/resume.png' id="resume-image"></img>
                <br/>
              </div>
            </div>
        </section>

        <section id="experience">
          <div className="ExperienceTitle">
            <h1> Experience </h1>
          </div>
        </section>


        <section id="projects">
          <div className="ProjectsTitle">
            <h1> Projects </h1>
          </div>
        </section>


        <section id="contact">
          <div className="ContactTitle">
            <h1> Contact Me </h1>
            <div className = "contact-container">
              <div className="contacts">
                <a className="contactButtons" href="https://www.linkedin.com/in/nathan-david-wang/" target="_blank" rel="noopener noreferrer" ><i className="bi bi-linkedin"></i></a>
                <h5 className="smallText">  LinkedIn Profile </h5>
              </div>
              <div id="middleButton" className="contacts">
                <a className="contactButtons" href="mailto: nwang334@gatech.edu" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope"></i></a>
                <h5 className="smallText"> Email Me </h5>
              </div>
              <div className="contacts">
                <a className="contactButtons" href="https://github.com/Nathan-Wang23" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                <h5 className="smallText"> Check out my Github </h5>
              </div>
            </div>
          </div>
        </section>
        </main>
        {this.state.page < this.state.pages.length - 1 &&
          <footer>
            <FooterButton arrowType="bi bi-chevron-double-down" id="homeFooter" nextPage={this.state.pages[this.state.page + 1]}> </FooterButton>
          </footer>
        }
        {this.state.page >= this.state.pages.length - 1 &&
          <footer>
            <FooterButton arrowType="bi bi-chevron-double-up" id="homeFooter" nextPage={this.state.pages[0]}> </FooterButton>
          </footer>
        }

      </div>
    );
  }
}

export default Middle;

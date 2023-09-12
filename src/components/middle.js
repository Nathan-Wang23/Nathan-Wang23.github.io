/** @jsx */

import React from 'react';
import './middle.css';
import FooterButton from './footer';
import ExperienceCard from './experience'
import Honors from './modal'

var lastY = 0

let sty = {
  height: "40vh",
  width: "30vh",
  float: "left",
  marginTop: "10px",
  marginBottom: "10px",
  marginRight: "10px",
  marginLeft: "-50%",
  justifyContent: "center",
  alignItems: "center",
  border: "4px solid #F9F6E5",
  borderRadius: "5%"
};

class Middle extends React.Component {
  state = {
    page: 0,
    pages: ["home", "about", "resume", "experience", "projects", "contact"],
    pageValues: {},
    showHonors: false
  }

  handleSAA() {
    window.open("https://www.credly.com/badges/055e8c49-e2b9-4d37-9f20-b6f4d1f44373/public_url", "_blank")
  }

  handleCCP() {
    window.open("https://www.credly.com/badges/d4091654-1e91-4db6-922d-1502cdb3db29/public_url", "_blank")
  }

  handleML() {
    window.open("https://coursera.org/share/02d46146c271da65428b7ff524249dbf", "_blank")
  }

  handleHonors = () => {

    this.setState({
      showHonors: !this.state.showHonors
    });
  }


  listenScrollEvent = e => {
    let currentY = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let vert = window.scrollY
    let name = document.getElementById("contain")
    let headText = document.getElementById("headText")
    let aboutBegin = this.state.pageValues[1][1] + 60
    let aboutPageHeight = this.state.pageValues[1][2] - aboutBegin +60
    let delta = currentY - lastY
    let positionInFrame = vert - aboutBegin + aboutPageHeight/2
    let halfway = aboutPageHeight / 2
    let ratio = 90 / halfway

    if (vert >= 0 && vert < 7347) {
      if (vert >= this.state.pageValues[0][1] && vert < this.state.pageValues[0][2]) {
        this.setState({
          page: 0
        });
        if (vert <= 300) {
          name.className = "cont"
          headText.className = "nameTitle"
        }

      } else if (vert >= this.state.pageValues[1][1] && vert < this.state.pageValues[1][2]) {
        this.setState({
          page: 1
        });
        if (name != null && headText != null) {
          name.className = "none"
          headText.className = "none"
        }
      } else if (vert >= this.state.pageValues[2][1] && vert < this.state.pageValues[2][2]) {
        this.setState({
          page: 2
        });
        if (name != null && headText != null) {
          name.className = "none"
          headText.className = "none"
        }
      } else if (vert >= this.state.pageValues[3][1] && vert < this.state.pageValues[3][2]) {
        this.setState({
          page: 3
        });
        if (name != null && headText != null) {
          name.className = "none"
          headText.className = "none"
        }
      } else if (vert >= this.state.pageValues[4][1] && vert < this.state.pageValues[4][2]) {
        this.setState({
          page: 4
        });
        if (name != null && headText != null) {
          name.className = "none"
          headText.className = "none"
        }
      } else if (vert >= this.state.pageValues[5][1] && vert < this.state.pageValues[5][2]) {
        this.setState({
          page: 5
        });
        if (name != null && headText != null) {
          name.className = "none"
          headText.className = "none"
        }
      }
    } else {
      currentY = vert
    }

    if (vert >= aboutBegin - aboutPageHeight/2 && vert < aboutBegin + aboutPageHeight/2) {
      let x = 0
      if (positionInFrame < halfway) {
        x = ratio * delta
      } else {
        x = ratio * delta * -1.0
      }
      let newPercentage = parseFloat(sty.marginLeft.slice(0,-1)) + x
      if (newPercentage > 90) {
        newPercentage = 90.0
      }
      if (newPercentage < -50) {
        newPercentage = -50.0
      }
      sty = {
        height: "40vh",
        width: "30vh",
        float: "left",
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "10px",
        marginLeft: `${newPercentage}%`,
        justifyContent: "center",
        alignItems: "center",
        border: "4px solid #F9F6E5",
        borderRadius: "5%"
      };
    } else if (sty !== {
      height: "40vh",
      width: "30vh",
      float: "left",
      marginTop: "10px",
      marginBottom: "10px",
      marginRight: "10px",
      marginLeft: '-50%',
      justifyContent: "center",
      alignItems: "center",
      border: "4px solid #F9F6E5",
      borderRadius: "5%"
    } && (vert < aboutBegin - aboutPageHeight/2 || vert >= aboutBegin + aboutPageHeight/2)){
      sty = {
        height: "40vh",
        width: "30vh",
        float: "left",
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "10px",
        marginLeft: '-50%',
        justifyContent: "center",
        alignItems: "center",
        border: "4px solid #F9F6E5",
        borderRadius: "5%"
      };
    }
    window.scrollTo(scrollLeft, currentY);
    lastY = currentY
  }

  componentDidMount() {
    let begin = 0
    let page_dict = {}
    for (let i = 0; i < this.state.pages.length; i++) {
      let current = this.state.pages[i]
      let pageHeight = document.getElementById(current).getBoundingClientRect().height;
      page_dict[i] = [current, begin-50, pageHeight+begin-50]
      begin += pageHeight
    }
    let currentY = 5;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 925)
    this.setState({
      pageValues: page_dict
    }, () => {
      window.addEventListener('scroll', (e) => this.listenScrollEvent(e));
      window.scrollTo(scrollLeft, currentY)
    });
  }


  render() {
    return (
      <div>
        <main>
        <section id="home">
          <div id="appHead" className="AppHeader">
            <div id="contain" className='cont'>
              <h1 id="headText" className="nameTitle">
                Nathan Wang
              </h1>
            </div>
          </div>
        </section>

        <section id="about">
          {/*<div className="AboutBlur"></div>*/}
            <div className='AboutTitle'>
              <h1> About Me </h1>
              <div className='about-content'>
                <div className="imageLeft">
                  <img style={{...sty}} alt="profile" src="/photos/profile.jpeg"></img>
                </div>
                <div className='textRight'>
                  <p>I'm a software engineer from Cupertino, California.</p>
                  <p>My specializations are in full-stack development, cloud services, and machine learning with computer vision.</p>
                  <p>As a graduate and researcher from Georgia Tech, I want to continue pursuing work on groundbreaking ideas and develop notable products.</p>
                  <h3>Georgia Institute of Technology</h3>
                  <p>Bachelor of Science, Computer Science Degree: May 2023</p>
                  <p>Masters of Science, Computer Science Degree: May 2024</p>
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
              <h4>Internships</h4>
              <ExperienceCard job="CSA Intern at Amazon Web Services" date="May 2023 — August 2023" details="Worked on cases for AWS clients seeking well-architected AWS solutions for security and fault tolerance. Developed code that combines AWS services to solve specific problems with the best architected framework. Utilized Linux and AWS CDKs to debug S3, Kubernetes, VPC, networking, and Apache web server issues. Built tools using the AWS CDK to facilitate proper replication of S3 buckets across regions. Built a web application extension for Amazon phone tools that uses AWS Rekognition to easily determine an employee’s alias for networking purposes."></ExperienceCard>
              <ExperienceCard job="SWE Intern at Machinify Inc." date="May 2021 — August 2021" details="Worked closely with senior developers to implement new features and enhance existing functionality
Developed user-friendly interfaces and improved the overall user experience of the company's software products
Conducted extensive testing and debugging to identify and resolve software defects"></ExperienceCard>
              <div>
                <h4>Certifications and Awards</h4>
                <img className="credit" src="/photos/SAA.png" alt="Solutions Architect Associate" onClick={this.handleSAA}></img>
                <img className="credit" src="/photos/CCP.png" alt="Certified Cloud Practitioner" onClick={this.handleCCP}></img>
                <img className="course" src="/photos/coursera.png" alt="ML Coursera" onClick={this.handleML}></img>
                <img className="honors" src="/photos/honors.png" alt="Faculty Honors" onClick={this.handleHonors}></img>
                <Honors title="Faculty Honors" date="Achieved for Fall and Spring semesters 2020 to 2023." content="This designation is awarded to undergraduate students who have earned a perfect 4.0 academic average for the semester." toggleModal={this.handleHonors} isOpen={this.state.showHonors}></Honors>
              </div>
          </div>
        </section>


        <section id="projects">
          <div className="ProjectsTitle">
            <h1> Projects and Papers</h1>
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
            <div className="bottomCircle"></div>
          </footer>
        }

      </div>
    );
  }
}

export default Middle;

/** @jsx */

import React from 'react';
import './middle.css';
import FooterButton from './footer';
import ExperienceCard from './experience'
import Honors from './modal'
//import Carousel from './carousel'
import { Carousel } from 'primereact/carousel';
import { projects } from './projectdata';
import { ScrollPanel } from 'primereact/scrollpanel';
import { GlassMagnifier } from '@datobs/react-image-magnifiers';

var lastY = 0

let sty = {
  height: "70vh",
  width: "50vh",
  float: "left",
  marginTop: "10px",
  marginBottom: "10px",
  marginRight: "10px",
  marginLeft: "-70%",
  justifyContent: "center",
  alignItems: "center",
  border: "4px solid #F9F6E5",
  borderRadius: "5%"
};

class Middle extends React.Component {
  state = {
    page: 0,
    pages: ["home", "about", "experience", "projects", "contact"],
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
    //let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let vert = window.scrollY
    let name = document.getElementById("contain")
    let headText = document.getElementById("headText")
    let aboutBegin = this.state.pageValues[1][1] + 60
    let aboutPageHeight = this.state.pageValues[1][2] - aboutBegin +60
    let delta = currentY - lastY
    let positionInFrame = vert - aboutBegin + aboutPageHeight/2
    let halfway = aboutPageHeight / 2
    let ratio = 90 / halfway

    if (vert >= 0 && vert < this.state.pageValues[4][2]) {
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
        }}
      //} else if (vert >= this.state.pageValues[5][1] && vert < this.state.pageValues[5][2]) {
      //  this.setState({
      //    page: 5
      //  });
      //  if (name != null && headText != null) {
      //    name.className = "none"
      //    headText.className = "none"
      //  }
      //}
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
        height: "70vh",
        width: "50vh",
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
    } else if ((vert < aboutBegin - aboutPageHeight/2 || vert >= aboutBegin + aboutPageHeight/2)){
      sty = {
        height: "70vh",
        width: "50vh",
        float: "left",
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "10px",
        marginLeft: '-70%',
        justifyContent: "center",
        alignItems: "center",
        border: "4px solid #F9F6E5",
        borderRadius: "5%"
      };
    }

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

    this.setState({
      pageValues: page_dict
    }, () => {
      window.addEventListener('scroll', (e) => this.listenScrollEvent(e));
    });
  }


  render() {
    const responsiveOptions = [
      {
        breakpoint: '70vw',
        numVisible: 10,
        numScroll: 1
      },
      {
        breakpoint: '70vw',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '70vw',
        numVisible: 1,
        numScroll: 1
      }
    ];

    const openResume = () => {
      window.open('photos/resume.pdf', '_blank');
    }


    const projectTemplate = (project) => {
      return (
          <div className='card-style'>
          {project.img !== "" && project.movie === "" &&
          <div style={{ marginTop:'2.5vh', marginLeft: '10px', marginRight:'10px',justifyContent: 'center', height: "100%", width: "auto", flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {project.img !== "" && project.movie === "" &&
                project.img.map((src, index) => (
                    <GlassMagnifier
                      key={index}
                      cursorStyle="crosshair"
                      style={{ maxWidth: '100%', maxHeight: "100%", height: "auto", width: "auto", zIndex: 0, border: "3px solid #B3A369", borderRadius: "8px", marginBottom: '5vh'}}
                      imageSrc={src}
                      imageAlt={`${project.title} ${index}`}
                      largeImageSrc={project.imgLarge[index]}
                      magnifierBorderColor="#002233"
                      magnifierSize="100%"
                      square={true}
                    />
                ))}
            </div>}

          {project.img !== "" && project.movie === "ONE" && <img className="projImg" src={project.img} alt={project.title} />}


            {project.movie !== "" &&
              project.img === "" &&
              <div className='mov-back'>
                <video className="projMov" autoPlay loop muted>
                  <source src={project.movie} type="video/mp4" />
                </video>
              </div>}

            {project.movie !== "" &&
              project.img !== "" &&
              project.movie !== "ONE" &&
              <div className='mov-back-with-img'>
                  <img className="projImg-with-movie" src={project.img} alt={project.title} />
                  <video className="projMov" autoPlay loop muted>
                    <source src={project.movie} type="video/mp4" />
                  </video>
              </div>}

            <div className='sidePiece'>
                <h2 className="projTit">{project.title}</h2>
                <ScrollPanel style={{ width: '100%', height: '40vh' }}>
                  <p className="desc">{project.description}</p>
                </ScrollPanel>
                {project.paper !== "" && <button className ="paper-button" onClick={() => window.open(project.paper, '_blank')}>View Paper/Project!</button>}
                {project.other !== "" && <button className="paper-button" onClick={() => window.open(project.other, '_blank')}>Other Links</button>}

            </div>
         </div>
      );
    };


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
                  <p>Hey there! I'm a software engineer from Cupertino, California. I specialize in full-stack development, cloud services, and machine learning. I'm a Georgia Tech graduate with a background in research. I'm enthusiastic about delving into innovative concepts and developing ground-breaking applications.</p>
                  <p>Still curious? <button onClick={openResume}>View my resume</button></p>
                  <h3>Georgia Institute of Technology</h3>
                  <p>Bachelor of Science, Computer Science Degree: May 2023</p>
                  <p>Masters of Science, Computer Science Degree: May 2024</p>
                </div>
            </div>
          </div>

        </section>


        {/*<section id="resume">
          <div className="ResumeTitle">
            <h1> Resume </h1>
            <div className="resume-content">
              <div className='resume-content'>
                <img alt="resume_nathan" src='/photos/resume.png' id="resume-image"></img>
                <br/>
              </div>
              </div>
            </div>
        </section>*/}

        <section id="experience">
          <div className="ExperienceTitle">
            <h1> Experience </h1>
              <h4>Internships</h4>
              <ExperienceCard job="CSA Intern at Amazon Web Services" date="May 2023 — August 2023" details="During my internship at AWS, I actively contributed to delivering top-tier cloud solutions for clients, emphasizing security and fault tolerance. My responsibilities primarily centered on devising and implementing optimal cloud architecture designs aligned with client requirements. I seamlessly integrating essential components through meticulous coding. This involved crafting solutions for S3 replication and implementing sophisticated IAM credential management systems with AWS CDKs. Engaging in these projects necessitated an adept use of Linux systems and leveraging AWS tools to architect, fine-tune, and rectify components that incorporate a suite of AWS services. I implemented multi-faceted features encompassing services like Lambda, EC2, S3, SageMaker, and others. On a daily basis, I dealt with complex infrastructures and designed for peak performance and scalability."></ExperienceCard>
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
            <h1 className="prjTit"> Projects and Papers</h1>
            <p style={{fontSize:"2vmin"}}>Hover over an image to enlarge. Make sure to check out my links!</p>
              <div className="card-container">
                <Carousel value={projects} numVisible={1} numScroll={1} className="custom-carousel" circular
                responsiveOptions={responsiveOptions} itemTemplate={projectTemplate}/>
              </div>
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

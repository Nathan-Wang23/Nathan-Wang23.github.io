/** @jsx */

import React from 'react';
import './middle.css';
import FooterButton from './footer';

class Middle extends React.Component {
  state = {
    page: 0,
    pages: ["home", "about", "resume", "interests", "contact"]
  }

  listenScrollEvent = e => {
    var pageHeight = document.getElementById("home").getBoundingClientRect().height;
    if (window.scrollY > 67) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
    for (let i = 0; i < this.state.pages.length; i++) {
      if (window.scrollY >= pageHeight * i && window.scrollY < pageHeight * (i + 1)) {
        this.setState({
          page: i
        });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    if (this.props.init) {
      window.scrollY = document.getElementById("appHead").getBoundingClientRect().height;
    }
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
            <p className="MeDescriptor">
              Software Engineer
            </p>
            <div className="homeContainer">
              <a className="homeButtons" href="https://github.com/Nathan-Wang23" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              <a className="homeButtons" href="https://www.linkedin.com/in/nathan-wang-14bab31b8/" target="_blank" rel="noopener noreferrer" ><i className="bi bi-linkedin"></i></a>
              <a className="homeButtons" href="mailto: nwang334@gatech.edu" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope"></i></a>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="AboutTitle">
            <h1> About </h1>
            {/*<div>
              <FooterButton arrowType="bi bi-chevron-double-down" id="aboutFooter" nextPage="resume"> </FooterButton>
            </div>*/}
          </div>

        </section>


        <section id="resume">
          <div className="ResumeTitle">
            <h1> Resume </h1>
            {/*<div>
              <FooterButton arrowType="bi bi-chevron-double-down" id="resumeFooter" nextPage="interests"> </FooterButton>
            </div>*/}
          </div>
        </section>


        <section id="interests">
          <div className="InterestsTitle">
            <h1> Interests </h1>
            {/*<div>
              <FooterButton arrowType="bi bi-chevron-double-down" id="interestsFooter" nextPage="contact"> </FooterButton>
            </div>*/}
          </div>
        </section>


        <section id="contact">
          <div className="ContactTitle">
            <h1> Contact Me </h1>
            <div>
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
            {/*<div>
              <FooterButton arrowType="bi bi-chevron-double-up" id="contactFooter" nextPage="home"> </FooterButton>
            </div>*/}
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

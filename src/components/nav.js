/** @jsx */
import React from 'react';
import './nav.css';
import {Link} from 'react-scroll';

class NavButton extends React.Component {
  state = {
    isSelected: false,
    isHover: false,
    pages: ["home", "about", "resume", "experience", "projects", "contact"]
  }

  handleOver = () => {
    this.setState({
      isHover: true
    });
  }

  handleLeave = () => {
    this.setState({
      isHover: false
    });
  }

  listenScrollEvent = e => {
    let total = 0
    for (let i = 0; i < this.props.order + 1; i++) {
      let pageHeight = document.getElementById(this.state.pages[i]).getBoundingClientRect().height;
      if (window.scrollY >= total && window.scrollY < total + pageHeight) {
        this.setState({
          isSelected: true
        });
      } else {
        this.setState({
          isSelected: false
        });
      }
      total += pageHeight
    }
    //if (window.scrollY >= pageHeight * this.props.order && window.scrollY < pageHeight * (this.props.order + 1)) {
    //  this.setState({
    //    isSelected: true
    //  });
    //} else {
    //  this.setState({
    //    isSelected: false
    //  })
    //}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    const myStyle = {
      backgroundColor: (this.state.isHover || this.state.isSelected) ? '#B3A369': '#F9F6F5',
      textAlign: "center",
      display: "inline-flex",
      justifyContent: "space-around",
      listStyle: "none",
      flexDirection: "row",
      fontSize: "calc(1px + 2vmin)",
      color: "#282c34",
      position: "sticky",
      top: "0%",
      zIndex: "9999",
      border: "1px solid #FFFFF8",
      borderRadius: "5px",
      padding: "0.5%",
      marginLeft: "5%",
      marginRight: "5%",
    }
    return (
      <Link style={myStyle} onMouseLeave={this.handleLeave} onMouseEnter={this.handleOver} id={this.props.id} to={this.props.toPage} spy={true} smooth={true}> {this.props.name} </Link>
    );
  }
}
//Move to button and try to use this.setState({backgroundColor: '#ebc631'})
class NavBar extends React.Component {
  render() {
    return (
      <div className="Nav">
        <NavButton order={0} id="homeButton" toPage="home" name="Home"></NavButton>
        <NavButton order={1} id="aboutButton" toPage="about" name="About"></NavButton>
        <NavButton order={2} id="resumeButton" toPage="resume" name="Resume"></NavButton>
        <NavButton order={3} id="experienceButton" toPage="experience" name="Experience"></NavButton>
        <NavButton order={4} id="projectsButton" toPage="projects" name="Projects"></NavButton>
        <NavButton order={5} id="contactButton" toPage="contact" name="Contact"></NavButton>
      </div>
    )
  }
}

export default NavBar;

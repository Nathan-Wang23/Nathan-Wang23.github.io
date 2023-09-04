/** @jsx */
import React from 'react';
import './nav.css';
import {Link} from 'react-scroll';

class NavButton extends React.Component {
  state = {
    isSelected: false,
    isHover: false
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
    var pageHeight = document.getElementById("home").getBoundingClientRect().height;
    if (window.scrollY > 67) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
    if (window.scrollY >= pageHeight * this.props.order && window.scrollY < pageHeight * (this.props.order + 1)) {
      this.setState({
        isSelected: true
      });
    } else {
      this.setState({
        isSelected: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    if (this.props.init) {
      window.scrollY = document.getElementById("appHead").getBoundingClientRect().height;
    }
  }

  render() {
    const myStyle = {
      backgroundColor: (this.state.isHover || this.state.isSelected) ? '#ebc631': '#FFFFF8',
      textAlign: "center",
      display: "inline-flex",
      justifyContent: "space-around",
      listStyle: "none",
      flexDirection: "row",
      fontSize: "calc(1px + 2vmin)",
      padding: "calc(1px + 2vmin)",
      color: "#282c34",
      position: "sticky",
      top: "0%",
      zIndex: "1",
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
        <NavButton order={3} id="interestsButton" toPage="interests" name="Interests"></NavButton>
        <NavButton order={4} id="contactButton" toPage="contact" name="Contact"></NavButton>
      </div>
    )
  }
}

export default NavBar;

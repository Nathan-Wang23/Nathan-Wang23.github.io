/** @jsx */
import React from 'react';
import './nav.css';
import {Link} from 'react-scroll'


class NavButton extends React.Component {
  render() {
    return (
      <Link
        to={this.props.toPage}
        spy={true}
        smooth={true}
        duration={1000}
        isDynamic={true}
        offset={-60}
        className='navbutton'
        activeClass='navbuttonSelected'
        id={this.props.id}
      >{this.props.name}</Link>
      //<Link className={this.props.isSelected ? "navbuttonSelected":"navbutton"} onMouseLeave={this.handleLeave} onMouseEnter={this.handleOver} id={this.props.id} to={this.props.toPage} spy={true} smooth={true}> {this.props.name} </Link>
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
        <NavButton order={2} id="experienceButton" toPage="experience" name="Experience"></NavButton>
        <NavButton order={3} id="projectsButton" toPage="projects" name="Projects"></NavButton>
        <NavButton order={4} id="awardsButton" toPage="certs" name="Awards"></NavButton>
        <NavButton order={5} id="contactButton" toPage="contact" name="Contact"></NavButton>
      </div>
    )
  }
}

export default NavBar;

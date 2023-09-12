/** @jsx */
import React from 'react';
import {Link} from 'react-scroll';
import 'bootstrap-icons/font/bootstrap-icons.css';

class FooterButton extends React.Component {
  state = {
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

  render() {
    const footerStyle = {
      backgroundColor: (this.state.isHover || this.state.isSelected) ? 'rgba(179, 163, 105, 0.9)': 'rgba(0,0,0,0.25)',
      border: (this.state.isHover || this.state.isSelected) ? '1px solid rgba(0,0,0,1)': "1px solid rgba(179, 163, 105, 0.9)",
      textAlign: "center",
      display: "inline-flex",
      justifyContent: "space-around",
      listStyle: "none",
      flexDirection: "row",
      fontSize: "calc(3px + 2vmin)",
      paddingTop: "calc(3px + 2vmin)",
      paddingBottom: "calc(3px + 2vmin)",
      paddingRight: "20vh",
      paddingLeft: "20vh",
      fontWeight: "normal",
      color: "white",
      borderRadius: "5px",
      zIndex: "15000",
      opacity: "1", // Leave this as 1
    }
    return (
      <Link style={footerStyle} onMouseLeave={this.handleLeave} onMouseEnter={this.handleOver} id={this.props.id} to={this.props.nextPage} spy={true} smooth={true}> <i className={this.props.arrowType}></i> </Link>
    );
  }
}

export default FooterButton;

/** @jsx */

import React from 'react';
import './experience.css';


class ExperienceCard extends React.Component {
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
        return (
            <div className="exp" onMouseLeave={this.handleLeave} onMouseEnter={this.handleOver}>
                <h3>{this.props.job}</h3>
                <p>{this.props.date}</p>
                <p>{this.props.details}</p>
            </div>
        );
    }

}

export default ExperienceCard
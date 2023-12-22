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
                <div className='job-header'>
                    <h3 className='title-job'>{this.props.job}</h3>
                    <p className='date'>{this.props.date}</p>
                </div>
                <div className='job-content'>
                    <p>{this.props.details}</p>
                </div>
            </div>
        );
    }

}

export default ExperienceCard
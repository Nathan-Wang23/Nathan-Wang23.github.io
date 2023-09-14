import { Modal, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import './modal.css'


export default class Honors extends Component{
  render () {
    if (!this.props.isOpen) {
      return null;
    }
    return (
      <>
            <Button className="butt" variant="primary" onClick={this.props.toggleModal}>&#10006;</Button>
            <div className='topBlur' onClick={this.props.toggleModal}> </div>
            <div className="hiddenBlur">
            <Modal disabled id="honor" className="modal" show={this.props.isOpen}>
                    <Modal.Header>
                        <div className="modalHeader">
                            <Modal.Title>
                              <h3 className="faculty">{this.props.title}</h3>
                            </Modal.Title>
                        </div>
                    </Modal.Header>
                    <Modal.Body >
                      <h5 className="bod">{this.props.date}</h5>
                      <p className="bod">{this.props.content}</p>
                    </Modal.Body>
              </Modal>

            </div>
        </>
    );
  }
}
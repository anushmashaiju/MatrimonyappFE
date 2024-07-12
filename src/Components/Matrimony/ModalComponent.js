import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalComponent.css'; // Import your CSS file for ModalComponent

const ModalComponent = ({ show, handleClose, title, content }) => {
  return (
    <Modal show={show} onHide={handleClose} className="custom-modal">
      <Modal.Header  >
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;

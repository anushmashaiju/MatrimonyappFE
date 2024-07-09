import React, { useState } from 'react';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import ModalComponent from './ModalComponent'; // Import the ModalComponent
import './BranchNavbar.css'; // Import the CSS file

const BranchNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '' });

  const handleShowModal = (title, content) => {
    setModalData({ title, content });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navbar className="branch-navbar">
     
        <Navbar.Collapse id="basic-navbar-nav" className="branch-navbar-collapse">
          <Nav className="branch-nav">
            <Nav.Item className="branch-nav-item">
              <Nav.Link onClick={() => handleShowModal('Shortlist', 'Shortlist details...')}>Shortlist</Nav.Link>
            </Nav.Item>
            <Nav.Item className="branch-nav-item">
              <Nav.Link onClick={() => handleShowModal('Shortlisted', 'Shortlisted details...')}>Shortlisted</Nav.Link>
            </Nav.Item>
            <Nav.Item className="branch-nav-item">
              <Nav.Link onClick={() => handleShowModal('Rejected', 'Rejected details...')}>Rejected</Nav.Link>
            </Nav.Item>
            <Nav.Item className="branch-nav-item">
              <Nav.Link onClick={() => handleShowModal('Sent Request', 'Sent Request details...')}>Sent Request</Nav.Link>
            </Nav.Item>
            <Nav.Item className="branch-nav-item">
              <Nav.Link onClick={() => handleShowModal('Received Request', 'Received Request details...')}>Received Request</Nav.Link>
            </Nav.Item>
            <Nav.Item className="branch-nav-item">
              <Nav.Link onClick={() => handleShowModal('Contacted', 'Contacted details...')}>Contacted</Nav.Link>
            </Nav.Item>
            <Nav.Item className="branch-nav-item">
              <Nav.Link onClick={() => handleShowModal('Messages', 'Messages details...')}>Messages</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <ModalComponent show={showModal} handleClose={handleCloseModal} title={modalData.title} content={modalData.content} />
    </>
  );
};

export default BranchNavbar;

import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Resume from '../assets/pdf/Professional Minimalist CV Resume (5).pdf'

function MoDal(props) {
    return (
        <Modal show={props.isOpen} onHide={props.onClose} centered size="lg" backdrop='static' >
            <Modal.Header closeButton>
                <Modal.Title>View Resume</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: '500px', padding: '0' }}>
                <iframe
                    title="Resume"
                    src={Resume}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                />
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}

export default MoDal

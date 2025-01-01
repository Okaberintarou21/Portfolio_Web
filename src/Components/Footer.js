import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';

function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const formRef = useRef(null); // Reference for the form element
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        subject: '',
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure all fields are filled
        if (!formData.subject || !formData.name || !formData.email || !formData.message) {
            Swal.fire({
                title: 'Error!',
                text: 'All fields are required.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
            return;
        }

        setIsLoading(true); // Start loading
        try {
            const result = await emailjs.sendForm(
                'service_6a44ghv',
                'template_31jjodj',
                formRef.current,
                '7DjkrjYPQHTAG4vjA'
            );

            console.log('Email sent successfully:', result.text);

            Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent.',
                icon: 'success',
                confirmButtonText: 'Ok',
            });

            setFormData({ subject: '', name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('Email sending failed:', error.text);

            Swal.fire({
                title: 'Error!',
                text: 'There was an error sending your message.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
        } finally {
            setIsLoading(false); // End loading
        }
    };

    return (
        <div>
            {isLoading && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    <Spinner animation="border" role="status" />
                    <span style={{ marginLeft: '10px' }}>Sending...</span>
                </div>
            )}
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
                <div className="overlay-mf"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="contact-mf" data-aos="fade-up">
                                <div id="contact" className="box-shadow-full">
                                    <Form ref={formRef} onSubmit={handleSubmit}>
                                        <Row className="mb-4">
                                            <Col>
                                                <h5 className="title-left">
                                                    Contact
                                                </h5>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label>Subject</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        placeholder="Enter subject"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Enter your name"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Enter your email"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label>Message</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={4}
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Enter your message"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={12} className="d-flex justify-content-end">
                                                <Button variant="primary" type="submit" size='lg' style={{borderRadius: '18px',backgroundColor: '#5622EC'}}>
                                                    Send Message
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="copyright-box">
                                    <p className="copyright">© 2024 Portfolio. All Rights Reserved</p>
                                    <div className="credits">
                                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>, Developed by{' '}
                                        <a
                                            href="https://github.com/Okaberintarou21"
                                            style={{ color: 'white', borderBottom: '1px solid white' }}
                                        >
                                            Okaberintarou21
                                        </a>
                                        .
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

        </div>
    );
}

export default Footer;

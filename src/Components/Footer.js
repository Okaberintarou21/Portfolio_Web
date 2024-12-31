import React from 'react'
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; // AOS styles
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Footer() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Customize the animation duration

        });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6a44ghv', 'template_31jjodj', e.target, '7DjkrjYPQHTAG4vjA')
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message has been sent.',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    });
                },
                (error) => {
                    console.log('Email sending failed:', error.text);
                    Swal.fire({
                        title: 'Error!',
                        text: 'There was an error sending your message.',
                        icon: 'error',
                        confirmButtonText: 'Try Again',
                    });
                }
            );
    };

    return (
        <div>
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" >
                <div className="overlay-mf"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="contact-mf" data-aos="fade-up">
                                <div id="contact" className="box-shadow-full" >
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    Contact
                                                </h5>
                                            </div>
                                            <div >
                                                <form onSubmit={handleSubmit} className="contactForm">
                                                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                                                    <div id="errormessage"></div>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={formData.name}
                                                                    onChange={handleChange}
                                                                    className="form-control"
                                                                    id="name" placeholder="Your Name"
                                                                    data-rule="minlen:4"
                                                                    data-msg="Please enter at least 4 chars" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="email"
                                                                    name="email"
                                                                    value={formData.email}
                                                                    onChange={handleChange} className="form-control" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <textarea
                                                                    className="form-control"
                                                                    name="message"
                                                                    value={formData.message}
                                                                    onChange={handleChange} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
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
                                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>, Developed by <a href='https://github.com/Okaberintarou21' style={{ color: 'white', borderBottom: '1px solid white' }}>Okaberintarou21</a> .
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer

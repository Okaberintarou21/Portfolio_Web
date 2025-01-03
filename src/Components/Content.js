import React from 'react'
import owner from '../assets/img/EC8225E2-542F-446B-A784-E7BDDF6A545F.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Chart from './Chart';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; // AOS styles
import Webadmin from '../assets/video/Screenshot 2025-01-01 214230.png'
import Portfolio from '../assets/video/Screenshot 2025-01-01 220402.png'
import Customer from '../assets/video/Screenshot 2025-01-01 222146.png'
import { Modal,Row,Col } from "react-bootstrap";
const VideoPlayerModal = ({ setShow, show }) => {

    return (
        <Modal show={show} onHide={() => setShow(false)} centered size="lg" backdrop='static' >
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-center'>
                <Row>
                    <Col md={12} className="d-flex justify-content-center">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#f9f9f9',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '20px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            maxWidth: '700px',
                            margin: '20px auto'
                        }}>
                            <iframe
                                src="https://drive.google.com/file/d/1nSBckGA2xNx3Yhf_D9_lfUzQcwMlKrLL/preview"
                                width="640"
                                height="480"
                                allow="autoplay"
                                title="webadminshow"
                                style={{
                                    borderRadius: '8px',
                                    border: 'none',
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>

    );
};

function Content() {
    const [modalshow, setModalShow] = useState(false);
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Customize the animation duration

        });
    }, []);

    return (
        <div data-aos="fade-left">
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src={owner} className="img-fluid rounded b-shadow-a" alt="portfoliopicture" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                    <p><span className="title-s">Name: </span> <span>Sittiporn Marom</span></p>
                                                    <p><span className="title-s">Profile: </span> <span>Frontend developer</span></p>
                                                    <p><span className="title-s">Email: </span> <span>sadowmoon48@gmail.com</span></p>
                                                    <p><span className="title-s">Phone: </span> <span>082-930-4681</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Skill</p>
                                            <span>HTML</span> <ProgressBar variant="danger" now={80} />
                                            <span>CSS3</span>  <ProgressBar variant="info" now={65} />
                                            <span>JAVASCRIPT</span> <ProgressBar variant="warning" now={70} />
                                            <span>PYTHON</span> <ProgressBar variant="success" now={60} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4  pt-md-0 ml-3 mr-3">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    About me
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                สำเร็จการศึกษาด้านวิศวกรรมไฟฟ้า มีความรู้ ความสามารถ และเข้าใจเกี่ยวกับวงจรไฟฟ้า อิเล็กทรอนิกส์ และความรู้พื้นฐานทางวิศวกรรม
                                                พร้อมนำความรู้เหล่านี้มาประยุกต์ใช้ในการพัฒนาระบบซอฟต์แวร์อย่างมีประสิทธิภาพ
                                            </p>
                                            <p className="lead">
                                                มีประสบการณ์ในการพัฒนา <span className="text-danger font-weight-bold"> Web Application</span> โดยใช้เทคโนโลยีสมัยใหม่ เช่น <span style={{ color: '#00c58e', fontWeight: 'bold' }}>React</span> , <span style={{ color: '#00c58e', fontWeight: 'bold' }}>Node.js</span>  และ <span style={{ color: '#00c58e', fontWeight: 'bold' }}>TailwindCSS</span> รวมถึงการใช้ <span style={{ color: '#00c58e', fontWeight: 'bold' }}>React Bootstrap </span>
                                                เพื่อสร้างส่วนประกอบ <span className="text-primary font-weight-bold">UI</span>ที่ดูดีและตอบสนองทุกการใช้งาน
                                            </p>
                                            <p className="lead ">
                                                มีความคุ้นเคยกับการทำงานในระบบ <span style={{ color: '#ff6600', fontWeight: 'bold', fontSize: '17px', marginRight: '5px' }}> Git Flow Control</span>
                                                ซึ่งช่วยให้สามารถจัดการการพัฒนาโค้ดอย่างเป็นระบบ พร้อมทำงานร่วมกับทีมเพื่อส่งมอบงานที่มีคุณภาพ
                                            </p>
                                            <p className="lead">
                                                ชอบการทำงานเป็นทีม เข้ากับผู้อื่นได้ง่าย อัธยาศัยดี และออกกำลังกายเป็นประจำ เพื่อเสริมสร้างสุขภาพกายและใจให้พร้อมสำหรับทุกความท้าทาย
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12 col-sm-12" style={{ paddingTop: "30px", display: "flex", justifyContent: "center", alignItems: "center", maxHeight: "400px" }}>
                                        <Chart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" className="portfolio-mf sect-pt4 route" data-aos="fade-right">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Projects
                                </h3>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box" data-aos="fade-up">
                                <div onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
                                    <div className="work-img">
                                        <img src={Webadmin} alt="webadmin" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">Administrative Web Interface</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Frontend Developer</span> / <span className="w-date">28 Dec. 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box" style={{ opacity: '0.5' }} data-aos="fade-down">
                                <div>
                                    <div className="work-img">
                                        <img src={Customer} alt="Customer" className="img-fluid" />                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">Customer Web Application</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Frontend Developer</span> / <span className="w-date">12 Nov. 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box" data-aos="fade-down">
                                <a href="https://okaberintarou21.github.io/Portfolio_Web/">
                                    <div className="work-img">
                                        <img src={Portfolio} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">Portfolio Web Application</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Frontend Developer</span> / <span className="w-date">1 Jan. 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoPlayerModal
                show={modalshow}
                setShow={setModalShow}
            />
        </div>
    )
}

export default Content

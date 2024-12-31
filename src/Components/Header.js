import React from 'react'
import BGBas from '../assets/img/BGBAS.png'
import { useState, useEffect } from "react";
import Modal from './Modal';

function Header() {
    const textItems = [
        "Web Developer",
        "Frontend Developer",
        "Electrical Engineer"
    ];
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100; // Typing speed in ms
    const pauseDuration = 1500; // Pause duration between texts
    const [dropdownOpen, setDropdownOpen] = useState(false);


    useEffect(() => {
        const type = () => {
            const fullText = textItems[currentIndex];
            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                if (currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % textItems.length);
                }
            }
        };

        const timer = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentIndex, textItems]);

    return (
        <div>
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#work">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="home" className="intro route bg-image" style={{ backgroundImage: `url(${BGBas})` }}>
                <div className="overlay-itro"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="intro-title mb-4">I am <span style={{ color: "#5622ec", fontFamily: "Monotype Corsiva", fontSize: "5rem" }}>Sittiporn Marom</span></h1>
                            <p className="intro-subtitle">
                                <span className="text-slider">{currentText}</span>
                                <strong className="cursor">|</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={dropdownOpen} onClose={() => setDropdownOpen(false)} />
        </div>
    )
}

export default Header

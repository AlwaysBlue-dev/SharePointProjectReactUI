import React from 'react';
import logoImage from '../assets/logo.jpeg';

const Navbar = () => {
    return (
        <div>
            {/* Top Navbar with Logo and Search Bar */}
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
                        <div className="d-flex justify-content-center justify-content-md-start w-100">
                            <a href="#"><img src={logoImage} alt="Logo" className="navbar-logo mr-2 img-fluid" style={{ maxHeight: "60px" }} /></a>
                            <a className="navbar-brand text-white text-center text-md-left" href="#"><span className="outlined-text"></span></a>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-end w-100 mt-2 mt-md-0">
                            <form className="form-inline position-relative" style={{ maxWidth: "300px" }}>
                                <input className="form-control pr-5" type="search" placeholder="Search" aria-label="Search" style={{ width: "100%" }} />
                                <button className="btn position-absolute" type="submit" style={{ right: "10px", top: "50%", transform: "translateY(-50%)", padding: "0", border: "none", background: "none" }}>
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Bottom Navbar with Menu Items */}
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBottom" aria-controls="navbarBottom" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarBottom">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="careersDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Careers
                    </a>
                    <div className="dropdown-menu" aria-labelledby="careersDropdown">
                        <a className="dropdown-item" href="#">Job Openings</a>
                        <a className="dropdown-item" href="#">Internships</a>
                        <a className="dropdown-item" href="#">Career Fairs</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="meetingsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Meetings & Groups
                    </a>
                    <div className="dropdown-menu" aria-labelledby="meetingsDropdown">
                        <a className="dropdown-item" href="#">Conference Rooms</a>
                        <a className="dropdown-item" href="#">Group Events</a>
                        <a className="dropdown-item" href="#">Schedule a Meeting</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="promotionsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Our Promotions
                    </a>
                    <div className="dropdown-menu" aria-labelledby="promotionsDropdown">
                        <a className="dropdown-item" href="#">Current Offers</a>
                        <a className="dropdown-item" href="#">Upcoming Events</a>
                        <a className="dropdown-item" href="#">Past Events</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="linksDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        My Links
                    </a>
                    <div className="dropdown-menu" aria-labelledby="linksDropdown">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Settings</a>
                        <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

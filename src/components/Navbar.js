import React from 'react';
import logoImage from '../assets/logo.jpg';

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
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="careersDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                HR & Benefits
                            </a>
                            <div className="dropdown-menu" aria-labelledby="careersDropdown">
                                <a className="dropdown-item" href="#">Payroll</a>
                                <a className="dropdown-item" href="#">View Payslips</a>
                                <a className="dropdown-item" href="#">Tax Documents</a>
                                <a className="dropdown-item" href="#">Benefits</a>
                                <a className="dropdown-item" href="#">Health Insurance</a>
                                <a className="dropdown-item" href="#">Leave Management</a>
                                <a className="dropdown-item" href="#">Request Leave</a>
                                <a className="dropdown-item" href="#">Performance Reviews</a>
                                <a className="dropdown-item" href="#">Goals</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="meetingsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Time & Attendance
                            </a>
                            <div className="dropdown-menu" aria-labelledby="promotionsDropdown">
                                <a className="dropdown-item" href="#">Clock In/Out</a>
                                <a className="dropdown-item" href="#">Timesheets</a>
                                <a className="dropdown-item" href="#">Attendance Records</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="promotionsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tasks & Projects
                            </a>
                            <div className="dropdown-menu" aria-labelledby="linksDropdown">
                                <a className="dropdown-item" href="#">To-Do Lists</a>
                                <a className="dropdown-item" href="#">Project Management</a>
                                <a className="dropdown-item" href="#">Current Projects</a>
                                <a className="dropdown-item" href="#">Calendar</a>
                                <a className="dropdown-item" href="#">Current Projects</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="linksDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Training & Development
                            </a>
                            <div className="dropdown-menu" aria-labelledby="promotionsDropdown">
                                <a className="dropdown-item" href="#">Learning Management System (LMS)</a>
                                <a className="dropdown-item" href="#">Courses</a>
                                <a className="dropdown-item" href="#">Certifications</a>
                                <a className="dropdown-item" href="#">Training Calendar</a>
                                <a className="dropdown-item" href="#">Resource Library</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="linksDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Documents
                            </a>
                            <div className="dropdown-menu" aria-labelledby="meetingsDropdown">
                                <a className="dropdown-item" href="#">Company Policies</a>
                                <a className="dropdown-item" href="#">Employee Handbook</a>
                                <a className="dropdown-item" href="#">Compliance Documents</a>
                                <a className="dropdown-item" href="#">Personal Documents</a>
                                <a className="dropdown-item" href="#">Upload Documents</a>
                                <a className="dropdown-item" href="#">View Uploaded Documents</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="linksDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Profile
                            </a>
                            <div className="dropdown-menu" aria-labelledby="promotionsDropdown">
                                <a className="dropdown-item" href="#">Perosnal Information</a>
                                <a className="dropdown-item" href="#">Contact Details</a>
                                <a className="dropdown-item" href="#">Emergency Contacts</a>
                                <a className="dropdown-item" href="#">Banking Information</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

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
                            <a href="#"><img src={logoImage} alt="Logo" className="navbar-logo mr-2 img-fluid" style={{ maxHeight: '60px' }} /></a>
                            <a className="navbar-brand text-white text-center text-md-left" href="#"><span className="outlined-text"></span></a>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-end w-100 mt-2 mt-md-0">
                            <form className="form-inline position-relative" style={{ maxWidth: '300px' }}>
                                <input className="form-control pr-5" type="search" placeholder="Search" aria-label="Search" style={{ width: '100%' }} />
                                <button className="btn position-absolute" type="submit" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', padding: 0, border: 'none', background: 'none' }}>
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
                            <a className="nav-link" href="#" target="_blank">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="careersDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" target="_blank">
                                HR & Benefits
                            </a>
                            <div className="dropdown-menu" aria-labelledby="careersDropdown">
                                <a className="dropdown-item" href="#" target="_blank">Payroll</a>
                                <a className="dropdown-item" href="#" target="_blank">View Payslips</a>
                                <a className="dropdown-item" href="#" target="_blank">Tax Documents</a>
                                <a className="dropdown-item" href="#" target="_blank">Benefits</a>
                                <a className="dropdown-item" href="#" target="_blank">Health Insurance</a>
                                <a className="dropdown-item" href="#" target="_blank">Leave Management</a>
                                <a className="dropdown-item" href="#" target="_blank">Request Leave</a>
                                <a className="dropdown-item" href="#" target="_blank">Performance Reviews</a>
                                <a className="dropdown-item" href="#" target="_blank">Goals</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="promotionsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" target="_blank">
                                Time & Attendance
                            </a>
                            <div className="dropdown-menu" aria-labelledby="promotionsDropdown">
                                <a className="dropdown-item" href="https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets#" target="_blank">Clock In/Out</a>
                                <a className="dropdown-item" href="#" target="_blank">Timesheets</a>
                                <a className="dropdown-item" href="#" target="_blank">Attendance Records</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="linksDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" target="_blank">
                                Tasks & Projects
                            </a>
                            <div className="dropdown-menu" aria-labelledby="linksDropdown">
                                <a className="dropdown-item" href="#" target="_blank">To-Do Lists</a>
                                <a className="dropdown-item" href="#" target="_blank">Project Management</a>
                                <a className="dropdown-item" href="#" target="_blank">Current Projects</a>
                                <a className="dropdown-item" href="#" target="_blank">Calendar</a>
                                <a className="dropdown-item" href="#" target="_blank">Current Projects</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="promotionsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" target="_blank">
                                Training & Development
                            </a>
                            <div className="dropdown-menu" aria-labelledby="promotionsDropdown">
                                <a className="dropdown-item" href="#" target="_blank">Learning Management System (LMS)</a>
                                <a className="dropdown-item" href="#" target="_blank">Courses</a>
                                <a className="dropdown-item" href="#" target="_blank">Certifications</a>
                                <a className="dropdown-item" href="#" target="_blank">Training Calendar</a>
                                <a className="dropdown-item" href="#" target="_blank">Resource Library</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="meetingsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" target="_blank">
                                Documents
                            </a>
                            <div className="dropdown-menu" aria-labelledby="meetingsDropdown">
                                <a className="dropdown-item" href="#" target="_blank">Company Policies</a>
                                <a className="dropdown-item" href="#" target="_blank">Employee Handbook</a>
                                <a className="dropdown-item" href="#" target="_blank">Compliance Documents</a>
                                <a className="dropdown-item" href="#" target="_blank">Personal Documents</a>
                                <a className="dropdown-item" href="#" target="_blank">Upload Documents</a>
                                <a className="dropdown-item" href="#" target="_blank">View Uploaded Documents</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="meetingsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" target="_blank">
                                Quick Links
                            </a>
                            <div className="dropdown-menu" aria-labelledby="meetingsDropdown">
                                <a className="dropdown-item" href="https://apps.trustmineral.com/auth/login" target="_blank">Mineral</a>
                                <a className="dropdown-item" href="https://apps.trustmineral.com/auth/login" target="_blank">Bamboo HR</a>
                                <a className="dropdown-item" href="https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets#" target="_blank">Quickbooks Time (Clock In)</a>
                                <a className="dropdown-item" href="https://accounts.intuit.com/app/sign-in?app_group=Workforce&asset_alias=Intuit.smallbusiness.vmp.employeewidgets&redirect_uri=https%3A%2F%2Fpaychecks.intuit.com%2Fapp%2Fpayroll-employee-portal-ui%2Fportal%2Fpaychecks&single_sign_on=false&appfabric=true" target="_blank">Workforce</a>
                                <a className="dropdown-item" href="https://accounts.intuit.com/app/sign-in?app_group=Workforce&asset_alias=Intuit.smallbusiness.vmp.employeewidgets&redirect_uri=https%3A%2F%2Fpaychecks.intuit.com%2Fapp%2Fpayroll-employee-portal-ui%2Fportal%2Fpaychecks&single_sign_on=false&appfabric=true" target="_blank">Payroll</a>
                                <a className="dropdown-item" href="" target="_blank">Mail</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="promotionsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" target="_blank">
                                Profile
                            </a>
                            <div className="dropdown-menu" aria-labelledby="promotionsDropdown">
                                <a className="dropdown-item" href="#" target="_blank">Personal Information</a>
                                <a className="dropdown-item" href="#" target="_blank">Contact Details</a>
                                <a className="dropdown-item" href="#" target="_blank">Emergency Contacts</a>
                                <a className="dropdown-item" href="#" target="_blank">Banking Information</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

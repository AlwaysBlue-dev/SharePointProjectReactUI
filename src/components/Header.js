import React from 'react';
import headerImage from '../assets/header.jpg';

const Header = () => {
    return (


        <div className="container-fluid">
            <div class="feedback-button">
                <div class="calendar">
                    <div class="day">MON</div>
                    <div class="date">10</div>
                </div>
                <a href="#"><button class="btn">FEEDBACK</button></a>
            </div>

            <div className="row">
                <div className="col-md-7 position-relative">
                    <div className="content-header">
                        <img src={headerImage} alt="Header Image" className="img-fluid" />
                        <div className="overlay-text position-absolute" style={{ bottom: "10%", left: "10%", width: "80%", backgroundColor: "rgba(27, 18, 18, 0.8)", padding: "20px" }}>
                            <h5 className="text-white mb-2">It's time to Smile</h5>
                            <p className="text-white mb-0" style={{ fontSize: "14px" }}>Dental coverage is now included as part of all our benefit plans. All plans include free preventive and diagnostic care, including cleanings, X-rays, and exams.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 sidebar">
                    <div className="icon-grid">
                        <a href="#" className="icon">
                            <i className="fas fa-envelope"></i>
                            <p>Mail</p>
                        </a>
                        <a href="#" className="icon">
                            <i className="fas fa-cloud"></i>
                            <p>OneDrive</p>
                        </a>
                        <a href="#" className="icon">
                            <i className="fas fa-tasks"></i>
                            <p>Planner</p>
                        </a>
                        <a href="#" className="icon">
                            <i className="fas fa-address-book"></i>
                            <p>Phonebook</p>
                        </a>
                        <a href="#" className="icon">
                            <i className="fas fa-calendar-alt"></i>
                            <p>Calendar</p>
                        </a>
                        <a href="#" className="icon">
                            <i className="fas fa-trophy"></i>
                            <p>Sales</p>
                        </a>
                        <a href="#" className="icon">
                            <i className="fas fa-video"></i>
                            <p>Videos</p>
                        </a>
                        <a href="#" className="icon">
                            <i className="fas fa-users"></i>
                            <p>Teams</p>
                        </a>
                        <a href="#" className="icon">
                            <i className="fas fa-chart-pie"></i>
                            <p>Metrics</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

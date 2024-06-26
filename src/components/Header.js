import React from 'react';
import headerImage1 from '../assets/image1.jpeg';
import headerImage2 from '../assets/image2.jpeg';
import headerImage3 from '../assets/image3.jpeg';
import headerImage4 from '../assets/image4.jpeg';
import headerImage5 from '../assets/image5.jpeg';

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="feedback-button">
                <div className="calendar">
                    <div className="day">MON</div>
                    <div className="date">10</div>
                </div>
                <a href="#"><button className="btn">FEEDBACK</button></a>
            </div>

            <div className="row">
                <div className="col-md-7 position-relative">
                    {/* Carousel */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="5000">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={headerImage1} alt="First Slide" className="d-block w-100 carousel-image" />
                                <div className="overlay-text position-absolute"
                                    style={{ bottom: '10%', left: '10%', width: '80%', backgroundColor: 'rgba(27, 18, 18, 0.8)', padding: '20px' }}>
                                    <h5 className="text-white mb-2">Embrace Your Success</h5>
                                    <p className="text-white mb-0" style={{ fontSize: '14px' }}>Empowering your legal journey with dedication and expertise, Brant and Associates are your trusted partners in achieving success.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={headerImage2} alt="Second slide" className="d-block w-100 carousel-image" />
                            </div>
                            <div className="carousel-item">
                                <img src={headerImage3} alt="Third slide" className="d-block w-100 carousel-image" />
                            </div>
                            <div className="carousel-item">
                                <img src={headerImage4} alt="Fourth slide" className="d-block w-100 carousel-image" />
                            </div>
                            <div className="carousel-item">
                                <img src={headerImage5} alt="Fifth slide" className="d-block w-100 carousel-image" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/* End of Carousel */}
                </div>

                <div className="col-md-5 sidebar">
                    <div className="icon-grid">
                        <a href="https://keeper.app/login" className="icon" target="_blank">
                            <i className="fas fa-user-friends"></i>
                            <p>Keeper</p>
                        </a>
                        <a href="https://accounts.intuit.com/app/sign-in?app_group=QBO&asset_alias=Intuit.accounting.core.qbowebapp&app_environment=prod"
                            className="icon" target="_blank">
                            <i className="fas fa-business-time"></i>
                            <p>Quickbooks</p>
                        </a>
                        <a href="https://legalfinancialservices.bamboohr.com/login.php" className="icon" target="_blank">
                            <i className="fas fa-user-tie"></i>
                            <p>Bamboo HR</p>
                        </a>
                        <a href="https://accounts.intuit.com/app/sign-in?app_group=QBTime&asset_alias=Intuit.qbshared.tsheets#"
                            className="icon" target="_blank">
                            <i className="fas fa-clock"></i>
                            <p>Clock In/Out</p>
                        </a>
                        <a href="https://accounts.intuit.com/app/sign-in?app_group=Workforce&asset_alias=Intuit.smallbusiness.vmp.employeewidgets&redirect_uri=https%3A%2F%2Fpaychecks.intuit.com%2Fapp%2Fpayroll-employee-portal-ui%2Fportal%2Fpaychecks&single_sign_on=false&appfabric=true"
                            className="icon" target="_blank">
                            <i className="fas fa-briefcase"></i>
                            <p>Workforce</p>
                        </a>
                        <a href="#" className="icon" target="_blank">
                            <i className="fas fa-envelope"></i>
                            <p>Mail</p>
                        </a>
                        <a href="#" className="icon" target="_blank">
                            <i className="fas fa-calendar-alt"></i>
                            <p>Calendar</p>
                        </a>
                        <a href="#" className="icon" target="_blank">
                            <i className="fas fa-users"></i>
                            <p>Teams</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

import React from 'react';
import newsImage from '../assets/news.jpg'; 
import celebrationImage from '../assets/celebration.jpg'; 

const Card = () => {
    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header news">News/Announcements</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                                    <img src={newsImage} alt="News Image" className="img-fluid fixed-image" />
                                </div>
                                <div className="col-md-8">
                                    <h6 className="card-title font-weight-bold" style={{ fontSize: "15px" }}>Welcome to our new Global Services Director</h6>
                                    <p className="card-text" style={{ fontSize: "13px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget leo vehicula, nec interdum tellus lacinia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header chat">Celebrations</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                                    <img src={celebrationImage} alt="Celebration Image" className="img-fluid fixed-image" />
                                </div>
                                <div className="col-md-8">
                                    <h6 className="card-title font-weight-bold" style={{ fontSize: "15px" }}>Happy Birthday Carl! Wishing you a great day</h6>
                                    <p className="card-text" style={{ fontSize: "13px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget leo vehicula, nec interdum tellus lacinia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header chat">Chat</div>
                        <div className="card-body">
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input type="text" className="form-control chat-input" placeholder="Share your thoughts..." aria-label="Share your thoughts..." aria-describedby="share-button" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary btn-sm ml-2 mt-2" type="submit" id="share-button" style={{ height: "40px", paddingTop: "0.25rem", paddingBottom: "0.25rem" }}>Share</button>
                                    </div>
                                </div>
                            </form>
                            <div className="col-md-12 mt-3">
                                <p><span className="font-weight-bold">Harold Katerjian</span> - <small className="text-muted">13 hours ago</small></p>
                                <p>WOW. Who knew turtles could weigh in as</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

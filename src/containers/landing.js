import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/header/header';
import LandingMap from "../components/maps/landingMap";
import graphic from '../assets/trippie-graphic-clean.jpg';
import avatar from '../assets/zach_avatar.jpg';
import bali from '../assets/bali_post.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faComments,
    faHeart,
    faComment,
    faMapMarkedAlt,
    faImages,
    faPlus,
    faPlane
} from '@fortawesome/free-solid-svg-icons'

class Landing extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container landing">
                    <LandingMap/>
                    <div className="about">
                        <h1>Time to get trippie!</h1>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </p>
                        <img src={graphic} alt="graphic"/>
                    </div>
                    <div className="post-container">
                        <div className="top">
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                            <div className="feed">
                                <h1>Your Feed</h1>
                            </div>
                            <div className="icon" style={{ float: "right" }}>
                                <FontAwesomeIcon icon={faComments}/>
                            </div>
                        </div>
                        <div className="post">
                            <div className="post-header">
                                <img src={avatar} alt="avatar" className="avatar"/>
                                <h2 className="post-username">
                                    zach.winters
                                </h2>
                                <h3 className="post-location">
                                    Anantara Resort, Bali, Indonesia
                                </h3>
                            </div>
                            <div className="post-body">
                                <img src={bali} alt="bali" className="post"/>
                            </div>
                            <div className="post-footer">
                                <FontAwesomeIcon icon={faHeart} className="icon heart"/>
                                <FontAwesomeIcon icon={faComment} className="icon comment"/>
                                <p className="likes">237 likes</p>
                                <div className="desc">
                                    <h2 className="username">zach.winters</h2>
                                    <p>Had a great time at Anantara Resort, follow my posts for more Bali recommendations!</p>
                                </div>
                                <div className="buttons">
                                    <div className="go button">
                                        I wanna go
                                    </div>
                                    <div className="been button">
                                        I've been
                                    </div>
                                    <div className="no button">
                                        No thanks
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-buttons">
                            <div className="button map">
                                <FontAwesomeIcon icon={faMapMarkedAlt} className="icon map"/>
                                <p>Map</p>
                            </div>
                            <div className="button feed">
                                <FontAwesomeIcon icon={faImages} className="icon feed"/>
                                <p>Feed</p>
                            </div>
                            <div className="button new">
                                <FontAwesomeIcon icon={faPlus} className="icon new"/>
                                <p>New</p>
                            </div>
                            <div className="button trips">
                                <FontAwesomeIcon icon={faPlane} className="icon trips"/>
                                <p>Trips</p>
                            </div>
                            <div className="button profile">
                                <FontAwesomeIcon icon={faUser} className="icon profile"/>
                                <p>Profile</p>
                            </div>
                        </div>
                    </div>
                    <div className="trips-container">
                        <div className="top">
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                            <div className="space"></div>
                            <div className="icon" style={{ float: "right" }}>
                                <FontAwesomeIcon icon={faComments}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(withRouter(Landing))
import React from 'react';
import './Footer.css';
import CalendarIcon from './Images/calendar_icon.svg';
import HapuGrayLogo from './Images/hapu_gray_logo.svg';
import FacebookLogo from './Images/facebook_icon.svg';
import TwitterLogo from './Images/twitter_icon.svg';
import InstagramLogo from './Images/instagram_icon.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerWhiteRectangle">
                    <div className="footerBecome">
                        <div>
                            <h3 className="title footerTitle">Become a nanny share host today!</h3>
                            <h3 className="title mobileFooterTitle">Become a nanny share host</h3>
                            <p className="text">Takes less than 5 minutes to get started</p>
                        </div>
                        <a href="https://www.jungle.rocks/" className="purpleButtonLink">
                            <button className="footerButton">
                                <div className="calendarIcon">
                                    <img src={CalendarIcon} alt="Icon of a calendar"/>
                                </div>
                                <div className="buttonText">
                                    <div>Create Your Nanny Share
                                        <div>Takes less than 5 minutes</div>
                                    </div>
                                </div>
                            </button>
                        </a>
                        <a href="https://www.jungle.rocks/" className="purpleLink footerPurpleLink">Or browse local nanny-shares</a>
                    </div>
                    <div className="footerCopyright">
                        <div className="footerLinks">
                            <img src={HapuGrayLogo} className="hapuGrayLogo" alt="Hapu's gray logo"/>
                            <ul>
                                <li><a href="https://www.jungle.rocks/">Create Your Nanny Share</a></li>
                                <li><a href="https://www.jungle.rocks/">Browse Nanny Shares</a></li>
                                <li><a href="https://www.jungle.rocks/">Become A Nanny Share Host</a></li>
                                <li><a href="https://www.jungle.rocks/">Terms & Privacy</a></li>
                            </ul>
                            <div className="logos">
                                <img src={FacebookLogo} alt="Facebook logo"/>
                                <img src={TwitterLogo} alt="Twitter logo"/>
                                <img src={InstagramLogo} alt="Instagram logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="mobileFooterCopyright">
                        <div className="mobileFooterLinks">
                            <div>
                                <img src={HapuGrayLogo} className="hapuGrayLogo" alt="Hapu's gray logo"/>
                            </div>
                            <ul>
                                <div>
                                    <li><a href="https://www.jungle.rocks/">Share Your Nanny</a></li>
                                    <li><a href="https://www.jungle.rocks/">Browse Shares</a></li>
                                </div>
                                <div>
                                    <li><a href="https://www.jungle.rocks/">Become A Nanny Share Host</a></li>
                                    <li><a href="https://www.jungle.rocks/">Terms & Privacy</a></li>
                                </div>   
                            </ul>
                            <div className="mobileLogos">
                                <img src={FacebookLogo} alt="Facebook logo"/>
                                <img src={TwitterLogo} alt="Twitter logo"/>
                                <img src={InstagramLogo} alt="Instagram logo"/>
                            </div>
                        </div>
                    </div>

                                <hr className="footerLine"/>
                    <div className="copyrightContainer">
                        <p className="copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
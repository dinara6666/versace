import React from 'react';

import "./Footer.css"
import {Delete2, Inst, Inst2, Inst3, Logoshop, Pochta} from "../../assets/index.js";

const Footer = () => {
    return (
        <div className={"container"}>

            <div className="small">
                <h2 className="h22">
                    ОСТАВАЙТЕСЬ В КУРСЕ НАШИХ <br/> НОВЕЙШИХ ПРЕДЛОЖЕНИЙ
                    <div className="email-container">
                        <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                             height="24">

                        </svg>
                        <img className={"pochta"} src={Pochta}/>
                        <input className="email-input" type="email" placeholder="Enter your email address"/>


                    </div>
                    <div className={"button111"}>
                    <button className="fbutton">Subscribe to Newsletter </button>
                    </div>
                    </h2>
            </div>


            <div>
                <div className="back">

                    <div className="viverra1">
                        <div className="D">
                            <img src={Logoshop} alt="Logo"/>
                            {/*<h3>Delizi<span>oso</span></h3>*/}
                        </div>
                        <div className="viverra">
                            <div className='viverra4'>
                                We have clothes that suits your style and <br/> which you’re proud to wear.
                                From <br/> women to men.
                            </div>
                        </div>
                        <div className="viverra2">
                            <img className="vi1" src={Inst3} alt="Logo1"/>
                            <img className="vi2" src={Inst2} alt="Logo2"/>
                            <img className="vi3" src={Inst} alt="Logo3"/>
                        </div>
                    </div>

                    <footer>
                        <div className="footer">
                            <div className="page">Company</div>
                            <div>About</div>
                            <div>Features</div>
                            <div>Works</div>
                            <div>Career</div>

                            <hr className={"hrr"}/>
                            <div className="copy">Shop.co © 2000-2023,All</div>
                        </div>

                        <div className="footer2">
                            <div className="page">Help</div>
                            <div>Customer Support</div>
                            <div>Delivery Details</div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>

                        <div className="footer3">
                            <div className="page">FAQ</div>
                            <div>Account</div>
                            <div>Manage Deliveries</div>
                            <div>Orders</div>
                            <div>Payments</div>
                        </div>

                        <div className="footer4">
                            <div className="page">Resources</div>
                            <div>Free eBooks</div>
                            <div>Development Tutorial</div>
                            <div>How to - Blog</div>
                            <div>Youtube Playlist</div>
                        </div>
                    </footer>
                </div>
            </div>
            {/*</div>*/}


        </div>


    );
};

export default Footer;
import React, { useState } from 'react';
import "./Ysl.css";
import { Check, Left1, Left2, Mystar } from "../../assets/index.js";

const Ysl = () => {
    const [showReviews, setShowReviews] = useState(false); // Toggles between two review sets

    const handleLeftClick = () => {
        setShowReviews(!showReviews);
    };

    return (
        <div className="container">
            <div className="left">
                <h1 className="logo3">OUR HAPPY CUSTOMERS</h1>
                <img
                    className="left2"
                    src={Left2}
                    alt="Left2"
                    onClick={handleLeftClick}
                />

                <img
                    className="left1"
                    src={Left1}
                    alt="Left1"
                    onClick={handleLeftClick}
                />
            </div>

            <div className="givanchi">

                {showReviews ? (

                    <>
                        <div className="moenn">
                            <img className="mystar" src={Mystar} alt="Star"/>
                            <div className="review-header">
                                <h4>Jackson.D</h4>
                                <img src={Check} alt="Check" className="check-icon"/>
                            </div>
                            <div className="pppp4">
                                <p>
                                    "I'm blown away by the quality and style <br/> of the clothes I received from
                                    Shop.co. <br/> From casual wear to elegant dresses, every <br/>piece I've bought has
                                    exceeded my expectations.”
                                </p>
                            </div>
                        </div>


                        <div className="moenn">
                            <img className="mystar" src={Mystar} alt="Star"/>
                            <div className="review-header">
                                <h4>Rose.P</h4>
                                <img src={Check} alt="Check" className="check-icon"/>
                            </div>
                            <div className="pppp4">
                                <p>
                                    "I'm blown away by the quality and style <br/> of the clothes I received from
                                    Shop.co. <br/> From casual wear to elegant dresses, every <br/>piece I've bought has
                                    exceeded my expectations.”
                                </p>
                            </div>
                        </div>

                        <div className="moenn">
                            <img className="mystar" src={Mystar} alt="Star"/>
                            <div className="review-header">
                                <h4> Mooen</h4>
                                <img src={Check} alt="Check" className="check-icon"/>
                            </div>
                            <div className="pppp4">
                                <p>
                                    "As someone who's always on the <br/> lookout for unique fashion pieces, <br/>I'm
                                    thrilled to have stumbled upon Shop.co. <br/> The selection of clothes is not
                                    only <br/>
                                    diverse but also on-point with the latest trends.”
                                </p>
                            </div>
                        </div>
                    </>
                ) : (

                    <>
                        <div className="Sarah">
                            <img className="mystar" src={Mystar} alt="Star"/>
                            <div className="review-header">
                                <h4>Sarah M.</h4>
                                <img src={Check} alt="Check" className="check-icon"/>
                            </div>
                            <div className="pppp">
                                <p>
                                    "I'm blown away by the quality and style of the <br/> clothes I received from
                                    Shop.co. From
                                    casual <br/> wear to elegant dresses, every piece I've bought <br /> has exceeded my
                                    expectations."
                                </p>
                            </div>
                        </div>

                        <div className="Alex">
                            <img className="mystar" src={Mystar} alt="Star" />
                            <div className="review-header">
                                <h4>Alex K.</h4>
                                <img src={Check} alt="Check" className="check-icon" />
                            </div>
                            <div className="pppp2">
                                <p>
                                    "Finding clothes that align with my personal <br /> style used to be a challenge until I
                                    discovered <br /> Shop.co. The range of options they offer is truly <br /> remarkable,
                                    catering to a variety of tastes and <br /> occasions."
                                </p>
                            </div>
                        </div>

                        <div className="James">
                            <img className="mystar" src={Mystar} alt="Star" />
                            <div className="review-header">
                                <h4>James L.</h4>
                                <img src={Check} alt="Check" className="check-icon" />
                            </div>
                            <div className="pppp3">
                                <p>
                                    "As someone who's always on the lookout for <br /> unique fashion pieces, I'm thrilled to
                                    have <br /> stumbled upon Shop.co. The selection of <br /> clothes is not only diverse but
                                    also on-point <br /> with the latest trends."
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Ysl;


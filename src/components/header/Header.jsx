import React, {Component} from 'react';
import './Header.css';

import {Beiwe, Shop, Shop2} from '../../assets/index';
class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className={"brend"}>
                    <div className="header-cont">
                        <h5 className={"h55"}>SHOP.CO</h5>
                        <p className={"pp"}>On Sale</p>
                        <p className={"ppp"}>New Arrivals</p>


                        <div className="search-container">
                            <input type="text" className="search-input" placeholder="Search for products..."/>
                            <div className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path
                                        d="M23.364 21.636l-5.715-5.715a9.017 9.017 0 0 0 1.22-5.505C18.005 6.222 14.51 2.73 10.253 2.73c-4.258 0-7.755 3.395-7.755 7.755s3.497 7.755 7.755 7.755c1.467 0 2.842-.42 4.057-1.166l5.553 5.553a1 1 0 0 0 1.413-1.413zM10.253 14.23c-3.05 0-5.5-2.45-5.5-5.5s2.45-5.5 5.5-5.5 5.5 2.45 5.5 5.5-2.45 5.5-5.5 5.5z"/>
                                </svg>
                            </div>
                        </div>

                        <div className={"shopi"}>
                            <img src={Shop}/>
                            <img src={Shop2}/>
                        </div>


                    </div>


                </div>
            </div>
        );
    }
}

export default Header;
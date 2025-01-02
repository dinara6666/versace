import React from 'react';
import {Star, Star2, Text, Vers1, Vers2, Vers3, Vers4, Vers5} from "../../assets/index.js";
import "./Your-Style.css"
const YourStyle = () => {
    return (
        <div className={"container"}>

            <div className={"fon"}>
                <div className={"img1"}>

                </div>


                <img className={"text"} src={Text}/>


                <img className={"img1"} src={Star}/>
                <img className={"img3"}  src={Star2}/>

                <p>Browse through our diverse range of meticulously crafted garments, designed <br/> to bring out your
                    individuality and cater to your sense of style.</p>

                <button className={"button1"}>Shop Now</button>


                <div className={"spans"}>
                    <h3 className={"spans1"}>200+ <spans className={"spans11"}>International Brands</spans></h3>

                    <h3 className={"spans2"}>2,000+
                        <spans className={"spans22"}>High-Quality Products</spans>
                    </h3>

                    <h3 className={"spans3"}>30,000+ <spans className={"spans33"}>Happy Customers</spans></h3>
                </div>
            </div>


            <div className={"coo"}>
                <img src={Vers1}/>
                <img src={Vers2}/>
                <img src={Vers3}/>
                <img src={Vers4}/>
                <img src={Vers5}/>


            </div>

        </div>
    );
};

export default YourStyle;

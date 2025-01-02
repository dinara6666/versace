import React from 'react';
import {Jack1, Jack2, Jack3, Jack4, Nice1, Nice2, Nice3, Nice4, Text2} from "../../assets/index.js";
import "./Shop.css";

const Shop = () => {
    return (
        <div className={"container"}>
            <h2 className={"logo"}>NEW ARRIVALS</h2>

            <div className={"shopp"}>
                <div className={"product1"}>
                    <img className={"shop1"} src={Jack1} alt="T-shirt"/>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <h4>$120</h4>
                </div>

                <div className={"product2"}>
                    <img className={"shop2"} src={Jack2} alt="Skinny Fit Jeans"/>
                    <p>SKINNY FIT JEANS</p>
                    <h4>$240 <span className={"spann"}>$260</span></h4>
                </div>

                <div className={"product3"}>
                    <img className={"shop3"} src={Jack3} alt="Checkered Shirt"/>
                    <p>CHECKERED SHIRT</p>
                    <h4>$180</h4>
                </div>

                <div className={"product4"}>
                    <img className={"shop4"} src={Jack4} alt="Striped T-shirt"/>
                    <p>SLEEVE STRIPED T-SHIRT</p>
                    <h4>$130 <span className={"spannn"}>$160</span></h4>
                </div>
            </div>
            <div className={"button22"}>
               <button>ViewAll</button>
            </div>

            <hr className={"hrr"}/>

            <div className={"rrrr"}>
                <h2 className={"text4"}>TOP SELLING</h2>

            </div>
            <div className={"newshop"}>


                <div className={"product1"}>
                    <img className={"new1"} src={Nice1} alt="T-shirt"/>
                    <p>VERTICAL STRIPED SHIRT</p>
                    <h4>$212 </h4>
                </div>

                <div className={"product2"}>
                    <img className={"new2"} src={Nice2} alt="Skinny Fit Jeans"/>
                    <p>COURAGE GRAPHIC T-SHIRT</p>
                    <h4>$240 <span className={"spann1"}>$260</span></h4>
                </div>

                <div className={"product3"}>
                    <img className={"new3"} src={Nice3} alt="Checkered Shirt"/>
                    <p>LOOSE FIT BERMUDA SHORTS</p>
                    <h4>$180</h4>
                </div>

                <div className={"product4"}>
                    <img className={"new4"} src={Nice4} alt="Striped T-shirt"/>
                    <p>FADED SKINNY JEANS</p>
                    <h4>$130 <span className={"spann2"}>$160</span></h4>
                </div>

                <div className={"button33"}>
                    <button>ViewAll</button>
                </div>

            </div>


        </div>
    );
};

export default Shop;


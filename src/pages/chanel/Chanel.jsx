import React, { useState } from 'react';
import {Delete2, Meloch1, Sstrelka, Stran1, Stran2, Stran3} from "../../assets/index.js";
import "./Chanel.css"



const Chanel = () => {

    const [gradientTshirtCount, setGradientTshirtCount] = useState(1);
    const [checkeredShirtCount, setCheckeredShirtCount] = useState(1);
    const [skinnyJeansCount, setSkinnyJeansCount] = useState(1);

    const decreaseGradientTshirt = () => {
        if (gradientTshirtCount > 1) setGradientTshirtCount(gradientTshirtCount - 1);
    };

    const increaseGradientTshirt = () => {
        setGradientTshirtCount(gradientTshirtCount + 1);
    };

    const decreaseCheckeredShirt = () => {
        if (checkeredShirtCount > 1) setCheckeredShirtCount(checkeredShirtCount - 1);
    };

    const increaseCheckeredShirt = () => {
        setCheckeredShirtCount(checkeredShirtCount + 1);
    };

    const decreaseSkinnyJeans = () => {
        if (skinnyJeansCount > 1) setSkinnyJeansCount(skinnyJeansCount - 1);
    };

    const increaseSkinnyJeans = () => {
        setSkinnyJeansCount(skinnyJeansCount + 1);
    };

    return (
        <div>


            <h1>Your cart</h1>


            <div className={"aaa"}>
                <img className={"strran11"} src={Stran1}/>
                <h4>Gradient Graphic T-shirt</h4>
                <h5>Size: <span>Large </span></h5>
                <h5>Color: <span>White</span></h5>
                <h1>$145</h1>

                <div className="counter-container">
                    <button className="counter-button" onClick={decreaseGradientTshirt}>-</button>
                    <input type="number" className="counter-display" value={gradientTshirtCount} readOnly/>
                    <button className="counter-button" onClick={increaseGradientTshirt}>+</button>
                </div>

                <img className={"delete2"} src={Delete2} alt="Stran3"/>
            </div>



            <div className={"bbb"}>
                <img className={"stran22"} src={Stran2}/>
                <h4>CHECKERED SHIRT</h4>
                <h5>Size: <span>Medium  </span></h5>

                <h5>Color: <span>Red</span></h5>
                <h1>$180</h1>

                <div className="counter-container">
                    <button className="counter-button" onClick={decreaseCheckeredShirt}>-</button>
                    <input type="number" className="counter-display" value={checkeredShirtCount} readOnly />
                    <button className="counter-button" onClick={increaseCheckeredShirt}>+</button>
                </div>

                <img className={"delete22"} src={Delete2} alt="Stran3" />
            </div>

            {/* SKINNY FIT JEANS */}
            <div className={"ccc"}>
                <img src={Stran3}/>
                <h4>SKINNY FIT JEANS</h4>
                <h5>Size: <span>Large</span></h5>
                <h5>Color: <span>Blue</span></h5>
                <h1>$240</h1>

                <div className="counter-container">
                    <button className="counter-button" onClick={decreaseSkinnyJeans}>-</button>
                    <input type="number" className="counter-display" value={skinnyJeansCount} readOnly/>
                    <button className="counter-button" onClick={increaseSkinnyJeans}>+</button>
                </div>

                <img src={Delete2} alt="Stran3"/>

            </div>


            <div>
                <h2>Order Summary</h2>


                <h6>Subtotal <span> $565</span></h6>


                <h6> Discount (-20%) <span>-$113</span></h6>


                <h6>Delivery Fee<span> $15</span></h6>
          <hr/>

                <h6>Total <span>$467</span></h6>


                <div className={"meloch1"}>
                    <img src={Meloch1}/>
                    <button className={"button100"}>Add promo code</button>

                </div>
                <button className={"button101"}>Apply</button>


                <div className={"butt102"}>
                <button className={"button102"}>Go to Checkout</button>
              <img src={Sstrelka} alt="Stran3"/>

                </div>
            </div>


        </div>
    );
};

export default Chanel;

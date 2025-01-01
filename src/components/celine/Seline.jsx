import React from 'react';
import {Style1, Style2, Style3, Style4, Style5} from "../../assets/index.js";
import "./Selin.css"



const Seline = () => {
    return (
        <div className={"container"}>
            <div className={"formall"}>
                <img className={"style5"} src={Style5}/>

                <div className={"boddy"}>
                    <img className={"style1"} src={Style1}/>
                    <img className={"style2"}  src={Style2}/>
                    <img className={"style3"}  src={Style3}/>
                    <img className={"style4"}  src={Style4}/>
                </div>



            </div>
        </div>
    );
};

export default Seline;


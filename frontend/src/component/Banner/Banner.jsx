import React from 'react';
import epl_logo from '../../assets/img/PremierLeague_logo_White1506593717803.png';
import logoMU from '../../assets/img/logo.png';
import logoChelsea from '../../assets/img/Chelsea.png';
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content mu__gardient ">
                <div className="content__top">
                    <img src={epl_logo} alt="" />
                    <span>Saturday 20 May 2023</span>
                    <span>Kick Off 21:00</span>
                </div>
                <div className="content__match">
                    <span>Man Utd</span>
                    <img src={logoMU} alt="" />
                    <span className="and">VS</span>
                    <img src={logoChelsea} alt="" />
                    <span>Chelsea</span>
                </div>
                <div className="content__bottom">
                    <button>Match centre</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

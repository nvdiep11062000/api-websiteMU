import React from 'react';
import epl_logo_black from '../../assets/img/PremierLeague_logo_Black1506593679851.png';
// import logoMU from '../../assets/img/logo.png';
// import logoChelsea from '../../assets/img/Chelsea.png';
const CardMatches = ({ dayMatches, logoTeam1, logoTeam2, nameTeam1, nameTeam2, button, time }) => {
    return (
        <div className="card-matches">
            <div className="content-top">
                <img src={epl_logo_black} alt="" />
                <span>{dayMatches}</span>
            </div>
            <div className="content-mid-logo">
                <img src={logoTeam1} alt="" />
                <div className="score">{time}</div>
                <img src={logoTeam2} alt="" />
            </div>
            <div className="content-mid-matches">
                <span>{nameTeam1}</span>
                <span className="small">VS</span>
                <span>{nameTeam2}</span>
            </div>
            <div className="content-bottom">
                <button>{button}</button>
            </div>
        </div>
    );
};

export default CardMatches;

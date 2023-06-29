import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Players = ({ dataPlayer }) => {
    const [goalKeepers, setgoalKeepers] = useState([]);
    const [defenders, setDefenders] = useState([]);
    const [midfielders, setMidfielders] = useState([]);
    const [forward, setForward] = useState([]);
    useEffect(() => {
        const filterGoalkeeper = dataPlayer.filter((item) => item.position === 'Goalkeeper');
        setgoalKeepers(filterGoalkeeper);
        const filterDefenders = dataPlayer.filter((item) => item.position === 'Defender');
        setDefenders(filterDefenders);
        const filterMidfielders = dataPlayer.filter((item) => item.position === 'Midfielder');
        setMidfielders(filterMidfielders);
        const filterForward = dataPlayer.filter((item) => item.position === 'Forward');
        setForward(filterForward);
    }, [dataPlayer]);

    return (
        <div className="players">
            <h1>Goalkeepers</h1>
            <div className="goalkeepers">
                {goalKeepers.map((item, index) => (
                    <Link to={`/player/${item._id}`}>
                        <div className="player-card">
                            <div className="player-img">
                                <img src={item.image} alt="" />
                                <div className="gardient"></div>
                            </div>
                            <div className="player-content">
                                <span>{item.numberShirt}</span>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <h1>Defenders</h1>
            <div className="defenders">
                {defenders.map((item, index) => (
                    <Link to={`/player/${item._id}`}>
                        <div className="player-card">
                            <div className="player-img">
                                <img src={item.image} alt="" />
                                <div className="gardient"></div>
                            </div>
                            <div className="player-content">
                                <span>{item.numberShirt}</span>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <h1>Midfielders</h1>
            <div className="midfielders">
                {midfielders.map((item, index) => (
                    <Link to={`/player/${item._id}`}>
                        <div className="player-card">
                            <div className="player-img">
                                <img src={item.image} alt="" />
                                <div className="gardient"></div>
                            </div>
                            <div className="player-content">
                                <span>{item.numberShirt}</span>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <h1>Forwards</h1>
            <div className="forwards">
                {forward.map((item, index) => (
                    <Link to={`/player/${item._id}`}>
                        <div className="player-card">
                            <div className="player-img">
                                <img src={item.image} alt="" />
                                <div className="gardient"></div>
                            </div>
                            <div className="player-content">
                                <span>{item.numberShirt}</span>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Players;

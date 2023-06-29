import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const PlayerDetails = ({ dataPlayer }) => {
    const [detailPlayer, setDetailPlayer] = useState([]);
    const param = useParams();

    useEffect(() => {
        const getPlayer = async () => {
            const result = await fetch(`http://localhost:2000/player/${param.id}`);
            const data = await result.json();
            console.log('data nè :', data);
            setDetailPlayer(data);
            console.log('param nè : ', param);
            console.log('data-player:', detailPlayer);
        };
        getPlayer();
    }, []);

    return (
        <>
            <div className="player-details">
                <div className="player-top">
                    <div className="player-banner">
                        <div className="mu-gardient"></div>
                        <div className="player-img">
                            <img src={detailPlayer.image} alt="" />
                        </div>
                        <div className="player-name">
                            <span>#{detailPlayer.numberShirt}</span>
                            <span>{detailPlayer.name}</span>
                        </div>
                    </div>
                </div>
                <div className="player-contents">
                    <div className="player-quote">
                        <p>"{detailPlayer.quote}"</p>
                        <span>{detailPlayer.name}</span>
                    </div>
                    <div className="player-profile">
                        <h1>Profile</h1>
                        <div className="player-biography">
                            <h2>Biography</h2>
                            <p>{detailPlayer.biography}</p>
                        </div>
                        <div className="player-infors">
                            <div className="player-infor">
                                <span>position</span>
                                <p>{detailPlayer.position}</p>
                            </div>
                            <div className="player-infor">
                                <span>country</span>
                                <p>{detailPlayer.country}</p>
                            </div>
                            <div className="player-infor">
                                <span>date of birth</span>
                                <p className="active">{detailPlayer.dateOfBirth}</p>
                            </div>
                            <div className="player-infor">
                                <span>joined</span>
                                <p className="active">{detailPlayer.joined}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayerDetails;

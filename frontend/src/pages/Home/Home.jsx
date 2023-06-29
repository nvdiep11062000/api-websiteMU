import React from 'react';
import banner from '../../assets/img/old-trafford.jpg';
import banner1 from '../../assets/img/banner-1.jpg';
import banner2 from '../../assets/img/banner2.jpeg';
import banner3 from '../../assets/img/banner-3.jpg';
import banner4 from '../../assets/img/banner-4.jpg';
import { CiLink } from 'react-icons/ci';
import Banner from '../../component/Banner/Banner';
import CardMatches from '../../component/Card_Matches/CardMatches';
import { data_matches } from '../../assets/Data/DataMatches';
import Partners from '../../component/Partners/Partners';
// import BannerBottom from '../../component/Banner-Bottom/BannerBottom';
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home__news">
                    <div className="big_new1">
                        <img src={banner1} alt="" />
                        <div className="content">
                            <h2>Vote for your United Goal of the Season</h2>
                            <p>There have been some simply stunning efforts in 2022/23 - have your say!</p>
                            <div className="content__bottom">
                                <span>3h | news</span>
                                <a>
                                    <CiLink />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="big_new2">
                        {/* <img src={banner2} alt="" /> */}
                        <h2>MEN'S GOAL OF THE SEASON: THE NOMINEES</h2>
                        <div className="mu__gardient"></div>
                        <div className="content__bottom">
                            <span>5h | video</span>
                            <a>
                                <CiLink />
                            </a>
                        </div>
                    </div>
                    <div className="home__new">
                        <img src={banner3} alt="" />
                        <div className="content">
                            <div className="content__top">
                                <h2>Savage argues the case for Casemiro</h2>
                                <p>
                                    The BT Sport pundit outlines why he feels the Brazilian should be United's Player of
                                    the Year for 2022/23.
                                </p>
                            </div>
                            <div className="content__bottom">
                                <span>5h | video</span>
                                <a>
                                    <CiLink />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="home__new">
                        <div className="new__img">
                            <img src={banner3} alt="" />
                        </div>
                        <div className="content">
                            <div className="content__top">
                                <h2>United train ahead of Cherries clash</h2>
                                <p>
                                    These is good new coming out of the session , in front of our cameras at Carrington
                                </p>
                            </div>
                            <div className="content__bottom">
                                <span>5h | video</span>
                                <a>
                                    <CiLink />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="home__new">
                        <div className="new__img">
                            <img src={banner4} alt="" />
                        </div>
                        <div className="content">
                            <div className="content__top">
                                <h2>Savage argues the case for Casemiro</h2>
                                <p>
                                    The BT Sport pundit outlines why he feels the Brazilian should be United's Player of
                                    the Year for 2022/23.
                                </p>
                            </div>
                            <div className="content__bottom">
                                <span>5h | video</span>
                                <a>
                                    <CiLink />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="home__new">
                        <div className="new__img">
                            <img src={banner3} alt="" />
                        </div>

                        <div className="content">
                            <div className="content__top">
                                <h2>Savage argues the case for Casemiro</h2>
                                <p>
                                    The BT Sport pundit outlines why he feels the Brazilian should be United's Player of
                                    the Year for 2022/23.
                                </p>
                            </div>
                            <div className="content__bottom">
                                <span>5h | video</span>
                                <a>
                                    <CiLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner />
                <div className="home__matches">
                    <h1>Matches</h1>
                    <div className="card_matches">
                        {data_matches.map((item, index) => (
                            <CardMatches
                                logoTeam1={item.logo_team1}
                                logoTeam2={item.logo_team2}
                                nameTeam1={item.name_team1}
                                nameTeam2={item.name_team2}
                                time={item.time}
                                button={item.button}
                                dayMatches={item.day_matches}
                            />
                        ))}
                    </div>
                </div>
                <Partners />
            </div>
        </>
    );
};

export default Home;

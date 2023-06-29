import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
const OldTrafford = () => {
    return (
        <>
            <div className="stadium">
                <h1>visit old trafford</h1>
            </div>
            <div className="describe">
                <p>
                    Old Trafford Stadium is the world-famous home of Manchester United, and there's plenty to do when
                    you visit.
                </p>
                <span>
                    Visit on a non-matchday and enjoy a behind the scenes Stadium Tour, get a delicious bite to eat in
                    the Red Cafe or pick up a souvenir in the Megastore.
                </span>
            </div>
            <div className="tour">
                <div className="tour-card">
                    <div className="gardient">
                        <h1>museum & stadium tour</h1>
                        <p>The greatest football story ever told</p>
                        <span>
                            find out more <BsArrowRight />
                        </span>
                    </div>
                </div>
                <div className="tour-card">
                    <div className="gardient">
                        <h1>United Events</h1>
                        <p>Conferences, exhibitions and events at the Theatre of Dreams</p>
                        <span>
                            find out more <BsArrowRight />
                        </span>
                    </div>
                </div>
                <div className="tour-card">
                    <div className="gardient">
                        <h1>Red Café</h1>
                        <p>Enjoy a delicious meal or refreshing drink at the Red Café</p>
                        <span>
                            find out more <BsArrowRight />
                        </span>
                    </div>
                </div>
                <div className="tour-card">
                    <div className="gardient">
                        <h1>Megastore</h1>
                        <p>Pick up a souvenir to remember your visit to Old Trafford in the Megastore</p>
                        <span>
                            find out more <BsArrowRight />
                        </span>
                    </div>
                </div>
                <div className="tour-card">
                    <div className="gardient">
                        <h1>Getting Here</h1>
                        <p>There are lots of ways to get to Old Trafford, find the best one for you</p>
                        <span>
                            find out more <BsArrowRight />
                        </span>
                    </div>
                </div>
                <div className="tour-card">
                    <div className="gardient">
                        <h1>Visiting Supporters' Guide</h1>
                        <p>If you're a visting supporter, let us help you make the most of your visit</p>
                        <span>
                            find out more <BsArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OldTrafford;

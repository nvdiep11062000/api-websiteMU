import React from 'react';
import Marquee from 'react-fast-marquee';
import {
    SiAdidas,
    SiTeamviewer,
    SiCisco,
    SiChevrolet,
    SiSony,
    SiSpotify,
    SiFifa,
    SiPremierleague,
    SiEmirates,
} from 'react-icons/si';
const Partners = () => {
    return (
        <div className="partners">
            <Marquee>
                <div className="logo">
                    <SiAdidas />

                    <SiTeamviewer />

                    <SiCisco />

                    <SiChevrolet />

                    <SiSony />

                    <SiSpotify />

                    <SiFifa />

                    <SiPremierleague />

                    <SiEmirates />
                </div>
            </Marquee>
        </div>
    );
};

export default Partners;

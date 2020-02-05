import React, { Component } from 'react';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <TwitterTimelineEmbed
                    sourceType = 'profile'
                    screenName = 'einargudni'
                    options = {{height: 400}}
                />

                <div className="d-flex justify-content-center">
                    
                    <div className="pl-3 pr-3">
                        <TwitterFollowButton
                            screenName = {'Reboothack'}
                        />
                    </div>

                    <div className="pl-3 pr-3">
                        <TwitterHashtagButton
                            tag = {'reboothack2020'}
                        />
                    </div>

                    <div className="pl-3 pr-3">
                        <TwitterMentionButton
                            screenName = {'Reboothack'}
                        />
                    </div>
                </div>

            </div>
        );
    }

}

export default Twitter;
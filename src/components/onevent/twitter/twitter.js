import React, { Component } from 'react';

import { TwitterTimelineEmbed, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton } from 'react-twitter-embed';

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
                    screenName = 'reboothack'
                    options = {{height: 600}}
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
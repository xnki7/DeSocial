import React from 'react'
import "./EngagementBar.css"
import './ape.png'

function EngagementBar() {
    return (
        <>
        <div className="EngagementBar">
            <div className="left">
                <img className="profilePic" src={require('./ape.png')} alt="" />
                <div className="profileData">
                    <div className="username">AnimeConsumer27</div>
                    <div className="address">0x9X...2F3Z</div>
                </div>
            </div>
            <p className="right">Following</p>
        </div>
        <hr />
        </>
    )
}

export default EngagementBar
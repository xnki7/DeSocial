import React from 'react'
import ProfileBox from '../../Components/ProfileBox/ProfileBox'
import EngagementBar from '../../Components/EngagementBar/EngagementBar'
import './Following.css'

function Following() {
    return (
    <div className="Following">
        <ProfileBox />
        <p className="header">Following</p>
        <EngagementBar />
        <EngagementBar />
        <EngagementBar />
        <EngagementBar />
    </div>
    )
}

export default Following
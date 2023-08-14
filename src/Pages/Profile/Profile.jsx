import React from 'react'
import "./Profile.css"
import Post from '../../Components/Post/Post'
import ProfileBox from "../../Components/ProfileBox/ProfileBox"

function Profile() {
    return (
        <div className='Profile'>
            <ProfileBox />
            <Post />
            <Post />
        </div>
    )
}

export default Profile
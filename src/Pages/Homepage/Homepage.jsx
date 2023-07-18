import React from 'react'
import "./Homepage.css"
import InputBox from '../../Components/InputBox/InputBox'
import Post from '../../Components/Post/Post'

function Homepage() {
    return (
        <div className='Homepage'>
            <InputBox/>
            <Post/>
        </div>
    )
}

export default Homepage
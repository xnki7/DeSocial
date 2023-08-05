import React from 'react'
import "./Homepage.css"
import InputBox from '../../Components/InputBox/InputBox'
import Post from '../../Components/Post/Post'

function Homepage({ contract }) {
    return (
        <div className='Homepage'>
            <InputBox contract={contract} />
            <Post />
            <Post />
        </div>
    )
}

export default Homepage
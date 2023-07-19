import React from 'react'
import "./Bookmarks.css"
import Post from '../../Components/Post/Post'

function Bookmarks() {
    return (
        <div className='Bookmarks'>
            <p className="heading">Bookmarks</p>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Bookmarks
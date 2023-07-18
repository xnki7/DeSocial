import React from 'react'
import "./Post.css"

function Post() {
    return (
        <div className='Post'>
            <div className="header">
                <div className="leftContent">
                    <img src={require('./ape.png')} />
                    <div className="profileText">
                        <p className="userName">xnki7</p>
                        <div className="bottomText">
                            <p className="address">0x9X...zg73</p>
                            <p className="bar">|</p>
                            <p className="time">7 November '23</p>
                        </div>
                    </div>
                </div>
                <div className="rightContent">
                    <img src={require('./bookmark.png')} />
                </div>
            </div>
            <div className="mainContent">
                <div className="textContent">
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora veniam officia fugiat delectus alias? Ducimus perspiciatis maxime aperiam maiores ab in accusantium recusandae provident, reiciendis minima illo ipsa exercitationem aliquid ipsum animi quibusdam necessitatibus natus, eum placeat labore enim tempore! Quibusdam odit asperiores quis ipsum, aut hic eveniet neque itaque.</p>
                </div>
                <div className="image">
                    <img src={require('./monkey.webp')} />
                </div>
            </div>
        </div>
    )
}

export default Post
import React from 'react'
import "./InputBox.css"

function InputBox() {
    return (
        <div className='InputBox'>
            <div className="top">
                <div className="left">
                    <img src={require('../Post/ape.png')} />
                </div>
                <div className="right">
                    <textarea placeholder="What's happening..."></textarea>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <button>Post</button>
            </div>
        </div>
    )
}

export default InputBox
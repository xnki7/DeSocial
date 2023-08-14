import React from 'react'
import "./ProfileBox.css"

function ProfileBox(){
    return(
        <div className="outer">
        <div className="ProfileBoxTop">
            <div className="top">
                <div className="topProfile">
                    <div className="tpLeft">
                    <img src={require('./ape.png')} />
                    </div>
                    <div className="tpRight">
                    <p className="userName">AnimeConsumer27</p>
                    <p className="address">0x9X...zg73</p>
                    </div>
                </div>
            </div>
            <p className="bio">
                        Manipal University Jaipur 2025..React developer | web3 developer | UI/UX | Blockchain enthusiast | Wizard @ Lumos Lab
                    </p>
            <div className="bottom">
                <p>following</p>
            </div>
        </div>
        </div>
    )
}

export default ProfileBox
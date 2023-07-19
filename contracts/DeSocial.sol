//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";

contract DeSocial{

    using Counters for Counters.Counter;
    

    mapping (address => string) userProfiles; //address to profile cid
    mapping (address => address[]) usersFollwings; // address to followings of address
    mapping (address => address[]) usersFollowers; // address to follower of address

    string[] public posts; //array of all postCID
    Counters.Counter private postID; // counter for posts
    mapping (uint256 => Counters.Counter) public likes; //postId to post likes

    mapping (address => string[]) public  usersPosts; //address to users posts
    mapping (address => string[]) public  usersBookmarks; //address to bookmarks


    function post (string memory _postCID) public {
        posts.push(_postCID);
        usersPosts[msg.sender].push(_postCID);
        postID.increment();
    }  

    function follow (address _acc) public{
        usersFollwings[msg.sender].push(_acc);
        usersFollowers[_acc].push(msg.sender);
    }

    function bookmark (uint256 _postID) public{
        usersBookmarks[msg.sender].push(posts[_postID]);
    }

    function like (uint256 _postID) public {
        likes[_postID].increment();
    }
    // retweet and all get functions
    
}
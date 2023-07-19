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

    mapping (address => string[])  usersPosts; //address to users posts
    mapping (address => string[])  usersBookmarks; //address to bookmarks


    function getRegister (string memory _profileCID) public {
        userProfiles[msg.sender] = _profileCID;
    }
    
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
    
    function retweet(uint256 _postID) public{
        post(posts[_postID]);
    }

    function getCurrentCounter() public view returns(uint256){
        return (postID.current());
    }

    function getAllPosts() public view returns (string[] memory){
        return (posts);
    }

    function getBookMarks() public view returns (string[] memory){
        return (usersBookmarks[msg.sender]);
    }

    function getFollowings(address _acc) public view returns (address[] memory){
        return (usersFollwings[_acc]);
    }

    function getFollowers(address _acc) public view returns (address[] memory){
        return (usersFollowers[_acc]);
    }

    function getProfile(address _acc) public view returns (string memory){
        return (userProfiles[_acc]);
    }

    function getUserPosts(address _acc) public view returns (string[] memory){
        return (usersPosts[_acc]);
    }

    function getLikes(uint256 _postID) public view returns (uint256){
        return (likes[_postID].current());
    }
    
}
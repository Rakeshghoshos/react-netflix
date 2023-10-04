import React, { useState } from 'react'
import '../Css/ListItem.css'
import {FaPlay,FaPlus,FaThumbsUp,FaThumbsDown} from 'react-icons/fa'

export default function ListItem({index,i}){
    const [ishovered,setIsHovered]= useState(false);
    return(
        <div className="listitem" 
        style = {{left : ishovered && index * 225 -50 + index * 2.5}}
        onMouseEnter = {() => setIsHovered(true)} 
        onMouseLeave = {()=> setIsHovered(false)}>
           <img className ="iimage" src={`../images/${index}${i}.jpg`} alt=""/>
           <div className="iteminfo">
                <div className="icons">
                    <FaPlay />
                    <FaPlus />
                    <FaThumbsUp />
                    <FaThumbsDown />
                </div>
                <div className="iteminfotop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    frvercrtgttggdlrl
                    flde;dlkf9ricjcjwuq824jdjd
                    ddddddffpvlvorlv
                </div>
           </div>
        </div>
    );
}
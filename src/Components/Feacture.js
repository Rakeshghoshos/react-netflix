import React from 'react'
import {FiPlay,FiInfo} from 'react-icons/fi'
import '../Css/Feacture.css'

export default function Feacture({type}){
    return(
        <div className="feactured">
             {type && 
        (<div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
                <option value="thrills">Thrills</option>
                <option value="crime">Crime</option>
                <option value="historical">Historical</option>
                <option value="atf">All Time Fav</option>
                <option value="horror">Horror</option>
            </select>
        </div>
        )}
            <img src="../images/bat.jpg" width="100%" height="1080vh" alt=""/>
            <div className="info">
                <img  src="../images/blogo.jpg" alt=""/>
                <span className="desc">
                    The DC's classic movie batman
                    the story of famous Gotham city,
                    and the unusual crime and gangs of the city.
                    Want to watch? all the series of batman,
                    you can find out in netflix special thrills section.
                </span>
                <div className="buttons">
                    <button className="play">
                        <FiPlay /><span>Play</span>
                    </button>
                    <button className="more">
                        <FiInfo /><span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
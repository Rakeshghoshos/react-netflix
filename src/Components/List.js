import React, { useRef, useState } from 'react'
import '../Css/List.css'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import ListItem from './ListItem'

export default function List({i}){
    const [sn,setsn] = useState(0);
    const [ismoved,setIsMoved] = useState(false);
    const listref = useRef();

    const handleclick = (direction)=>{
        setIsMoved(true)
        let distance = listref.current.getBoundingClientRect().x - 50
        if(direction === "left" && sn > 0){
            setsn(sn -1)
            listref.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === "right" && sn <5){
            setsn(sn+1)
            listref.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return(
        <div className="list">
            <span className="listtitle">Continue to watch</span>
            <div className="wrapper">
                <FaArrowLeft className="sliderarrow left" onClick={(e) => handleclick("left")} style={{display : !ismoved && "none"}}/>
                <div className="list-cont" ref = {listref}>
                    <ListItem index={0} i = {i}/>
                    <ListItem index={1} i = {i}/>
                    <ListItem index={2} i = {i}/>
                    <ListItem index={3} i = {i}/>
                    <ListItem index={4} i = {i}/>
                    <ListItem index={5} i = {i}/>
                    <ListItem index={6} i = {i}/>
                    <ListItem index={7} i = {i}/>
                    <ListItem index={8} i = {i}/>
                    <ListItem index={9} i = {i}/>
                </div>
                <FaArrowRight className="sliderarrow right" onClick={(e) => handleclick("right")}/>
            </div>
        </div>
    );
}
import React from 'react'
import Navbar from './Navbar'
import '../Css/Home.css'
import Feacture from '../Components/Feacture'
import List from './List';

export default function Home(){
    return(
        <div className="home">
            <Navbar />
            <Feacture type="series"/>
            <List i={1}/>
            <List i={2}/>
            <List i={3}/>
            <List i={4}/>
            <List i={5}/>
        </div>
    );
}
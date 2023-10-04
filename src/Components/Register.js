import React, { useRef, useState } from 'react'
import '../Css/Register.css'
import bimage from './w1.jpg';

export default function Register(){
    const [email,setemail] = useState("");
    const eref = useRef();
    const [pass,setpass] = useState("");
    const pref = useRef();
    const style = {
        backgroundImage : `url(${bimage})`,
            backgroundSize :`cover`,
            backgroundRepeat : `no-repeat`,
    }
    function handle(){
        setemail(eref.current.value);
    }
    function handlefinish(){
        setpass(pref.current.value);
    }
    return(
        <div className="register" style={style}>
           <div className="top">
               <div className="wrapper">
               <img className="l" src="../images/netflix.jpg" alt="" />
                    <button className="loginbutton">Sign-In</button>
               </div>
           </div>
           <div className="container">
                <h1>Unlimited movies, Tv shows and More...</h1>
                <h2>Watch anywhere, cancel anytime</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={eref}/>
                        <button className="reg-button" onClick={()=> handle()}>Get Started</button>
                    </div>
                ):(
                    <form className="input">
                    <input type="password" placeholder="password" ref={pref}/>
                    <button className="reg-button" onClick={()=> handlefinish()}>Start</button>
                </form>
                )}
                
           </div>
        </div>
    );
}
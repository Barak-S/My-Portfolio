import React, { useEffect, useState } from 'react'
import './App.css';

export default function SocialHandles(){

    const [show, handleShow] = useState(false)
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 1){
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <ul id="horizontal-list">
                <li>
                    <img src="https://www.sharethis.com/wp-content/uploads/2017/05/LinkedIn.png" alt="Barak Saidoff LinkedIn" className="buttonIcon" style={{height: 63, padding:10,}} onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")} alt="Barak Saidoff LinkedIn"></img>
                </li>
                <li>
                    <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" className="buttonIcon github" style={{height: 63, padding:10}} onClick={()=> window.open("https://github.com/Barak-S", "_blank")}alt="Barak Saidoff GitHub Barak-S"></img>
                </li>
                <li>
                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" alt="Barak Saidoff Medium Blog" className="buttonIcon" style={{height: 63, padding:10}} onClick={()=> window.open("https://medium.com/@baraksaidoff", "_blank")}alt="Barak Saidoff Medium Blog"></img>
                </li>
            </ul>
        </div>

    )

}

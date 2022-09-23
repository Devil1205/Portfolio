import React from 'react';
import Projects from './Projects';

function Home() {
    return (
        <div>
            <div className="container-fluid banner">
                <div className="btn banner-btn">Download CV</div>
                <div className="btn banner-btn" onClick={()=>{document.querySelector('.projects').scrollIntoView({ behavior: 'smooth', block: 'start'})}}>View Projects</div>
            </div>
            <Projects />
        </div>
    )
}

export default Home
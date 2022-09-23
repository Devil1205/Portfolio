import React from 'react'
import textAbout from '../images/textAbout.png';
import goCalci from '../images/goCalci.png';
import youtubeClone from '../images/youtubeClone.png';
import flipkartClone from '../images/flipkartClone.png';
import utcClock from '../images/utcClock.png';
import toDosList from '../images/toDo\'sList.png';
import newsify from '../images/newsify.png';

function Projects() {
    return (
        <>
            <h1 className='text-center' style={{ margin: "20px 0px" }}>My Projects</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className="projects">
                    <div className="project">
                        <img src={textAbout} alt="" />
                        <p>TextAbout is a powerful and very useful daily text manipulation ultiliy that can convert text and manipulate it to many forms. You can convert from lower case to uppercase and uppercase to lower case, extract email id's from the text, remove extra spaces etc.</p>
                        <div style={{ display: "flex" }}>
                            <a href="https://devil1205.github.io/TextAbout/#/" rel="noopener noreferrer" target="_blank" className="btn banner-btn">Live Demo</a>
                            <a href="https://github.com/Devil1205/TextAbout" rel="noopener noreferrer" target="_blank" className="btn banner-btn">View GitHub</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={goCalci} alt="" />
                        <p>GoCalci is a simple, useful & powerful GUI calculator that can do various mathematical calculations such as additon, subtraction, multiplication, division, square root, trignometric funtions etc. Clean GUI interface makes it easier to use.</p>
                        <div style={{ display: "flex" }}>
                            <a href="https://devil1205.github.io/GoCalci/" rel="noopener noreferrer" target="_blank" className="btn banner-btn">Live Demo</a>
                            <a href="https://github.com/Devil1205/GoCalci" rel="noopener noreferrer" target="_blank" className="btn banner-btn">View GitHub</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={youtubeClone} alt="" />
                        <p>GoCalci is a simple, useful & powerful GUI calculator that can do various mathematical calculations such as additon, subtraction, multiplication, division, square root, trignometric funtions etc. Clean GUI interface makes it easier to use.</p>
                        <div style={{ display: "flex" }}>
                            <a href="https://devil1205.github.io/Youtube-Clone/" rel="noopener noreferrer" target="_blank" className="btn banner-btn">Live Demo</a>
                            <a href="https://github.com/Devil1205/Youtube-Clone" rel="noopener noreferrer" target="_blank" className="btn banner-btn">View GitHub</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={flipkartClone} alt="" />
                        <p>GoCalci is a simple, useful & powerful GUI calculator that can do various mathematical calculations such as additon, subtraction, multiplication, division, square root, trignometric funtions etc. Clean GUI interface makes it easier to use.</p>
                        <div style={{ display: "flex" }}>
                            <a href="https://devil1205.github.io/Flipkart-Clone/" rel="noopener noreferrer" target="_blank" className="btn banner-btn">Live Demo</a>
                            <a href="https://github.com/Devil1205/Flipkart-Clone" rel="noopener noreferrer" target="_blank" className="btn banner-btn">View GitHub</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={utcClock} alt="" />
                        <p>GoCalci is a simple, useful & powerful GUI calculator that can do various mathematical calculations such as additon, subtraction, multiplication, division, square root, trignometric funtions etc. Clean GUI interface makes it easier to use.</p>
                        <div style={{ display: "flex" }}>
                            <a href="https://devil1205.github.io/UTC-Clock/" rel="noopener noreferrer" target="_blank" className="btn banner-btn">Live Demo</a>
                            <a href="https://github.com/Devil1205/UTC-Clock" rel="noopener noreferrer" target="_blank" className="btn banner-btn">View GitHub</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={toDosList} alt="" />
                        <p>GoCalci is a simple, useful & powerful GUI calculator that can do various mathematical calculations such as additon, subtraction, multiplication, division, square root, trignometric funtions etc. Clean GUI interface makes it easier to use.</p>
                        <div style={{ display: "flex" }}>
                            <a href="https://devil1205.github.io/Todo-s-List/" rel="noopener noreferrer" target="_blank" className="btn banner-btn">Live Demo</a>
                            <a href="https://github.com/Devil1205/Todo-s-List" rel="noopener noreferrer" target="_blank" className="btn banner-btn">View GitHub</a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={newsify} alt="" />
                        <p>GoCalci is a simple, useful & powerful GUI calculator that can do various mathematical calculations such as additon, subtraction, multiplication, division, square root, trignometric funtions etc. Clean GUI interface makes it easier to use.</p>
                        <div style={{ display: "flex" }}>
                            <a href="https://devil1205.github.io/Newsify/" rel="noopener noreferrer" target="_blank" className="btn banner-btn">Live Demo</a>
                            <a href="https://github.com/Devil1205/Newsify" rel="noopener noreferrer" target="_blank" className="btn banner-btn">View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
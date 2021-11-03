import React from 'react';
import Fade from 'react-reveal/Fade';

const Header = () => {

    return (
        <div>
        <header>
            <h1><Fade bottom cascade>Stunning Gradients</Fade></h1>
            <nav>
                <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/AmanSharma703">Github</a></li>
                        <li><a href="mailto:aman703jk@gmail.com"><button>Contact</button></a></li>

                </ul>
            </nav>
        </header>
            <p className='header-title'>
            Handpicked stunning gradient <br/>
            colors for your next projects ✌</p>
                
        </div> );
}

 
export default Header;
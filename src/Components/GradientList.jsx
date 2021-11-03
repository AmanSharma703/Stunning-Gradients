import React  from 'react';
import data from '../data'
import Fade from 'react-reveal/Fade';
import Gradient from './Gradient';


const GradientList = () => {
    const state = {
        data:data
    }
    return (
        <>
        <div className='gradient-grid'>
            {state.data.map((gradient,index)=>(
                <Fade bottom key = {index}>
                <Gradient color1={gradient.color1} color2={gradient.color2} ></Gradient>
            </Fade>
            ))}
        
            <span className='footer'>Made With <span style={{color: "red"}}>❤</span> by <a href="https://www.linkedin.com/in/amansharma703"><strong>Aman Sharma</strong></a></span>
        </div>
        </>
    )
}

export default GradientList;
import React from 'react';
import resume1 from '../assets/images/resume-page1.jpg';
import resume2 from '../assets/images/resume-page2.jpg';
import '../style.css';

const Resume = () => {
    return (
        <React.Fragment>
   

   <div class="row">
       <div class="column">
           <img className='resume' src={resume1} />
           <img className='resume' src={resume2} />
        </div> 
    </div>


    <h3 className='center'>Please Click Here To Download My Resume: <a href="https://github.com/miraj00/react-spa-portfolio/blob/main/src/assets/Miraj%20Patel%20-%20Full%20Stack%20Web%20Developer%20Resume.pdf">Miraj Patel Resume</a>     
   </h3>


        </React.Fragment>
    );
};

export default Resume;
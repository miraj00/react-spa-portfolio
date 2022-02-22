import React from 'react';
import Photo from '../assets/images/Miraj.jpeg';
import '../style.css';

function About() {
    return (
    
        <React.Fragment>

   <div className="container" >
      <div className="row">
         <div className="col-3">
               <div className='grid-item'> <img className='photo' src={Photo} /> </div>
         </div>
         <div className="col-9">
              <div className='info-text'> Little Information About Me </div>
         </div>
      </div>  
      <br></br>
    
        <div className='row'>
                               
                <p>Born and grew up in India, Completed My High School in the Year 2004. 
        After that studied for computer hardware, software and networking, completed certifications in web-designing, c Programming, c++ and MCSA and MCSE.
        I learned many different languages, applications and softwares along the way in my career such as Java, SQL Databases, Github and so on. 
                </p>

            </div>
        </div>   

    </React.Fragment>

        )
    }   

export default About;
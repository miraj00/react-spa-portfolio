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
      <br></br>
        <div className='row'>
                               
                <p>Completed High School in Anand, India in Year 2004. After that studied for computer hardware, software and networking, completed certifications in web-designing, c Programming, c++ and MCSA and MCSE.
                    After compleleting education in computers related certification, I moved to USA in 2005 and joined county college to continue study further. I started studying for Biotechnology. At the same 
                    I decided to become pharmacist and started toward studying doctor of pharmacy. After completing 4 years of degree program, I graduated from Temple University with the Doctor of Pharmacy Degree in Year 2013.
                    <br></br>
                    After becoming pharmacist, I worked at long-term pharmacy for 3 years, then opened my own business. Setting and running pharmacy from scratch, I built business clientel and and sold it after 5 years of running it successfully.
                    As to describe in short, here is my journey in timeline :
                </p>
                <p>
                    2003-2004    Graduated from High-School <br></br>
                    2004-2005    Completed Computer Hardware, Software, Networking Certifications <br></br>
                    2005-2009    Studied Biotechnology <br></br>
                    2009-2013    Studied for Doctor of Pharmacy Degree and Completed in Year 2013 <br></br>
                    2013-2016    Worked at Long-Term Pharmacy as a Pharmacist <br></br>
                    2016-2021    Started Retail Pharmacy Business, Ran for 5 Years and Then Sold it in January 2021 <br></br>
                    In Yr-2021   Travelled Thru US for 3 Months, Then Started Study Coding / Programming at Rutgers Bootcamp 
                </p> 
                <p> Now, a Full Stack Web-Developer with a individual and Group projects experience in bootcamo. Comfortable using HTML, CSS, Javascript, ReactJS, Node.js, MongoDB Database, MySQL and other technologies.
                </p>
            </div>
        </div>   

    </React.Fragment>

        )
    }   


export default About;
import React from 'react';
// import styled from 'styled-components';
import group_10339 from "../images/page20/Group 10339.png";
import trophy_icon from "../images/page20/trophy-icon.png";
import molecule_icon from "../images/page20/molecule-icon.png";
import job_icon from "../images/page20/job-icon.png";
import C_icon from "../images/page20/C_icon.png";
import Python_icon from "../images/page20/Python_icon.png";
import Java_icon from "../images/page20/Java_icon.png";


import "../App.css";




function PythonCourseComponent() {
  return (
    <div className='min-h-2200 sm:min-h-1800 md:min-h-1600 lg:min-h-1250 my_container'>

        {/* top heading and logo */}

        <div style={{display:"flex",flexWrap:"wrap"}}>
            <div>
                <img style={{margin:"10px 0px 0px 5px",height:"101px",width:"121px"}} src={group_10339} alt='Group-10339'/>
            </div>

            <div className='text-center font-bold mt-10' style={{color:"#CB8461",fontSize:"25px",lineHeight:"40px",flex:"1"}}>
                <h1>Why should I Learned Python</h1>
            </div>

        </div>


        {/* points for learning python */}

        <div className='mt-3' style={{color:"white",display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center"}}>

        
                    <div className="flex justify-center items-center points_to_learn_div" style={{gap:"17px"}}>
                        <div>
                            <img src={trophy_icon}/>
                        </div>

                        <div>
                            <h1>Building Block for your carrer</h1>
                            <p>No matter whatever career path you choose in the field of compute science ,data structures and algorithms lies at the root of it</p>
                        </div>
                    </div>                    



           
                    <div className="flex justify-center items-center points_to_learn_div" style={{gap:"17px"}}>
                        <div>
                            <img src={job_icon}/>
                        </div>

                        <div>
                            <h1>Building Block for your job</h1>
                            <p>No matter whatever career path you choose in the field of compute science ,data structures and algorithms lies at the root of it</p>                  

                        </div>            

                    </div>




                    <div className="flex items-center space-x-4 points_to_learn_div">
                        <div>
                            <img src={molecule_icon} style={{width:"36px"}}/>
                        </div>

                        <div>
                            <h1>Essential skill for job in software developement</h1>
                            <p>All top product companies including FAANG will test your skills in data structure and algorithms</p>
                        </div>
                    </div>

        
        </div>            




        {/* why should you choose python */}


        <div className='flex flex-col items-center justify-center mt-20' style={{flexWrap:"wrap"}}>
            <div>
                <h1 style={{color:"#CB8461",fontSize:"25px",fontWeight:"600"}}>Why should You Choose Python</h1>
                <p style={{color:"#ffffff",fontSize:"13px",textAlign:"center",margin:"10px 0px"}}>Python is world easiest and popular language</p>
            </div>
        </div>


        {/*C++,Java,Python divs */}



        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        
            <div className="choose_python_div">

                <img src={C_icon}/>
                
                <h1 className='text-center'>C++</h1>
                <p>C++ programs are directly compiled into machine-executable codes which consumes less time to execute the code. Hence, it is widely used in competitive programming where you are expected to optimise time and memory. So, if you are interested to explore competitive programming then it is good to start with C++ language</p>

            </div>


            <div className="choose_python_div">

                <img src={Java_icon}/>
                
                <h1 className='text-center'>Java</h1>
                <p>Java programs are easy to understand, structured and less prone to errors. Also, they are platform independent and portable which makes it a good choice for mobile, web and desktop applications. So, if you are looking for a career in software development then it is good to start with the Java language</p>

            </div>


            <div className="choose_python_div">

                 <img src={Python_icon}/>
                
                <h1 className='text-center'>Python</h1>
                <p>Python programs are simple in syntax with extensive library support which helps the programmers to come up with required logic with few lines of code. It is popular and widely used in the data domains like data science, Machine learning, deep learning etc.., So, if you are looking for a career in the field of Artificial Intelligence then it is good to start with the Python language</p>

            </div>


        </div>



    <div className='h-32'></div>

        {/* bottom logo */}

        <div className='flex align-baseline justify-center' >
        
            <img style={{position:"relative",left:"3%",height:"118.94px",width:"144px"}} src={group_10339} />
        </div>



    </div>
  )
}

export default PythonCourseComponent;
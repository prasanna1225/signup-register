import React from 'react';
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
import {ReactComponent as LearnPythonMainPage} from "../images/page20/LearnPythonMainPage.svg";
import Check_icon from "../images/page20/Check_icon.png";
import "../App.css";


function LearnPythonComponent() {
  return (

    <>
        <div className='flex flex-row justify-around flex-wrap-reverse sm:flex-col-reverse md:min-h-830 lg:min-h-600 learn_python_container'>


            {/* left side content */}

            <div style={{flex:"1",display:"flex",flexDirection:"column",flexWrap:"wrap",padding:"10px"}}>

                <h1 style={{fontSize:"27px",marginBottom:"5px",color:"#215D4F",fontWeight:"bolder"}}>Learn Python</h1>
                <h3 style={{fontSize:"20px",margin:"5px 0px 25px 0px",color:"#CB8461",fontWeight:"bold"}}>The complete journey Beginner to Pro 2022</h3>
                <h5 style={{fontSize:"15px",margin:"5px 0px 25px 0px",color:"#45776B",fontWeight:"500"}}>For Beginner and Experienced Learners</h5>

                <p style={{fontSize:"15px"}}>This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Competitive Programming and machine learning</p>



                {/* ratings div */}

                <div className='ratings_div'>

                    <h1 style={{flex:"1",maxWidth:"50px",color:"#215D4F",fontWeight:"bold"}}>4.0</h1>
                    <div style={{display:"flex",flex:"1"}}>
                        <AiFillStar style={{color:"#FFC700"}}/>
                        <AiFillStar style={{color:"#FFC700"}}/>
                        <AiFillStar style={{color:"#FFC700"}}/>
                        <AiFillStar style={{color:"#FFC700"}}/>
                        <AiOutlineStar style={{color:"#D9D9D9"}}/>

                    </div>
                    <h1 style={{flex:"2",color:"#215D4F",fontWeight:"500"}}>150+ Students</h1>

                </div>


                {/* buttons */}

                <div className='enroll_try_btn'>

                    <button style={{backgroundColor:"#215D4F",color:"white"}}>Enroll Now</button>
                    <button style={{border:"1px solid #215D4F80",color:"#215D4F",fontWeight:"bold"}}>Try For Free</button>

                </div>



                <div style={{border:"1px solid #D9D9D9",width:"87%",margin:"10px 0px 0px 25px"}}></div>



                {/* statistics/numbers div */}

                <div className='statistic_div'>

                    <div className='statistic_child_div'>
                        <h1>30K+</h1>
                        <span>Students enrolled</span>
                    </div>

                    <div className='statistic_child_div'>
                        <h1>200+</h1>
                        <span>Problems</span>
                    </div>

                    <div className='statistic_child_div'>
                        <h1>6</h1>
                        <span>Months</span>
                    </div>

                    <div className='statistic_child_div'>
                        <h1>70+</h1>
                        <span>Hours</span>
                    </div>

                </div>




                {/* what will you learn */}


                <div style={{border:"1px solid #D9D9D9",minHeight:"130px",minWidth:"100%",borderRadius:"10px",padding:"10px"}}>

                    <h1 style={{color:"#215D4F",fontWeight:"bold",fontSize:"17px"}}>What you will learn</h1>

                    <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"12px"}}>

                        <div style={{display:"flex",gap:"10px",alignItems:"flex-start",flex:"1"}}>
                            <img style={{height:"15px",marginTop:"2px"}} src={Check_icon}/>
                            <p style={{fontSize:"12px"}}>Create their own python programs</p>
                        </div>

                        <div style={{display:"flex",gap:"10px",alignItems:"flex-start",flex:"1"}}>
                            <img style={{height:"15px",marginTop:"2px"}} src={Check_icon}/>
                            <p style={{fontSize:"12px"}}>Parse the web and create their own games</p>
                        </div>
                        
                    </div>

                    <div style={{display:"flex",gap:"10px",alignItems:"flex-start"}}>
                            <img style={{height:"15px",marginTop:"2px"}} src={Check_icon}/>
                            <p style={{fontSize:"12px"}}>Becomes an Experienced Python Programmer</p>
                    </div>

                </div>




            </div>




            {/* empty div for spacing */}
            {/* <div style={{flex:"1"}}></div> */}




            {/* image */}

            <div style={{flex:"1",marginTop:"25px"}}>
            
                <LearnPythonMainPage className='max-w-screen-sm:h-20 h-96 md:w-11/12 lg:w-full lg:h-5/6' style={{marginLeft:"10px"}}/>
            
            </div>

        </div>



    </>
  )
}

export default LearnPythonComponent;
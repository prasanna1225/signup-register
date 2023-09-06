import React from 'react';
import "../App.css";

function SelectPlanComponent() {
  return (
    <div className='min-h-830' style={{backgroundColor:"#215D4F",width:"95%",borderRadius:"10px"}}>

  



      {/* Heading and para */}
      <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",alignItems:"center",padding:"10px",position:"relative",top:"25px"}}>

          <h1 style={{color:"white",fontWeight:"bold",fontSize:"25px"}}>Select a Plan</h1>
          <p style={{color:"white",margin:"8px 20px 0px 20px"}}>Choose the perfect plan for your learning journey and unlock your potential with our wide range of courses and resources</p>
      
      </div>





      {/* Plans Card */}

      <div className='cards_container'>

      

        <div className='buy_plans_div' style={{backgroundColor:"white"}}>

          <h1>Basic</h1>
          <span>$120</span>

          <div className='ul_div'>
            <ul className="list-disc">
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>

            </ul>


          </div>


                  {/* button */}

          <div className='h-5'></div>

          <div>
            <button className='my_btn'>Get Started</button>
          </div>

          


        </div>





        <div className='buy_plans_div' style={{backgroundColor:"white"}}>

            <h1>Intro</h1>
            <span>$120</span>

            <div className='ul_div'>
              <ul className="list-disc">
                <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
                <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>

              </ul>


            </div>


                    {/* button */}

            <div className='h-6'></div>

            <div>
              <button className='my_btn'>Get Started</button>
            </div>



        </div>









        <div className='buy_plans_div' style={{backgroundColor:"white"}}>

          <h1>Standard</h1>
          <span>$120</span>

          <div className='ul_div'>
            <ul className="list-disc">
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Mi tristique orci nunc sollicitudin enim.</li>

            </ul>


          </div>


                  {/* button */}

          <div className='h-6'></div>

          <div>
            <button className='my_btn'>Get Started</button>
          </div>



        </div>









      </div>





    </div>
  )
}

export default SelectPlanComponent

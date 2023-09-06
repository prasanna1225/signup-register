import React from 'react';
import BenifitsofPurchase from '../Components/BenifitsofPurchase';
import CourseGuides from '../Components/CourseGuides';
import StillUnsureForm from '../Components/StillUnsureForm';
import LearnPythonComponent from "../Components/LearnPythonComponent";
import PythonCourseComponent from "../Components/PythonCourseComponent";
import SelectPlanComponent from "../Components/SelectPlanComponent";



const Page20 = () => {
  return (
    <div>

      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

      <LearnPythonComponent/>
      <PythonCourseComponent/>
      <SelectPlanComponent/>

      </div>

      <div className='mt-7 flex flex-col'>
      <StillUnsureForm/>
      <BenifitsofPurchase />
      <CourseGuides />
      </div>
    </div>
  );
};

export default Page20;

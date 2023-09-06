import React from 'react';
import pathRight from '../images/page20/path-arrow-right.svg';
import pathLeft from '../images/page20/path-arrow-left.svg';

const benifits = [
  {
    title: 'Structured Learning',
    description:
      'A well-designed course provides a structured learning path that takes you through a specific topic or skill from start to finish. This can help you learn more efficiently and effectively than trying to piece together information from multiple sources.',
  },
  {
    title: 'Expert guidance',
    description:
      'Courses are often created by experts in their field, who have a deep understanding of the subject matter. This means you can benefit from their knowledge and experience, and get guidance on the most important concepts and skills to master.',
  },
  {
    title: 'Accountability',
    description:
      'When you purchase a course, you are making a commitment to learning. This can help keep you accountable and motivated to stick with the material and complete the course',
  },
  {
    title: 'Interactive learning',
    description:
      'Many courses include interactive elements such as quizzes, exercises, and discussions, which can help you engage with the material and deepen your understanding.',
  },
  {
    title: 'Better job prospects',
    description:
      "If you're looking to advance in your career or switch to a new field, completing a course can help you acquire the skills and knowledge needed to succeed and stand out to potential employers.",
  },
  {
    title: 'Flexibility',
    description:
      'Most courses are designed to be completed at your own pace, which can be especially helpful if you have a busy schedule or other commitments',
  },
];

const imageRender = (index) => {
  if (index < 5) {
    if ((index + 1) % 2 === 0) {
      return (
        <div className="flex align-middle justify-center my-1  max-lg:hidden ">
          <img src={pathLeft} className='w-5/6' alt="path__left__arrow" />
        </div>
      );
    }else{
      return (
        <div className="flex align-middle justify-center my-1 max-lg:hidden">
          <img src={pathRight} className='w-5/6' alt="path__left__arrow" />
        </div>
      );
    }
  }
};

const BenifitsofPurchase = () => {
  return (
    <div className="flex flex-col mt-5 py-5 w-10/12 mx-auto justify-center align-middle bg-slate-green  rounded-2xl ">
      <h3 className="text-xl font-semibold text-center text-raw-sienna ">
        Benifits of purchase this course
      </h3>
      <div className="flex flex-col align-middle justify-center text-white max-w-screen-xl mt-5 mx-auto">
        {benifits.map((benifit, index) => {
          return (
            <div className="flex flex-col w-full lg:px-[72px] mx-auto px-10 max-lg:mt-5">
              <div
                className={
                  (index + 1) % 2 === 0
                    ? 'flex lg:flex-row-reverse flex-col align-middle w-full'
                    : 'flex lg:flex-row flex-col align-middle w-full'
                }
              >
                <div className="flex flex-col h-full lg:w-1/6 w-full">
                  <div className="flex justify-center">
                    <div className="text-xl p-2 w-[37px] h-[37px]  bg-raw-sienna rounded-full text-center">
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-center text-3xl font font-semibold ">
                    {benifit.title}
                  </div>
                </div>
                <div className="flex justify-center align-middle h-full lg:w-5/6 w-full  lg:ml-10 p-3 text-xl mt-3 lg:mt-0">
                  {benifit.description}
                </div>
              </div>
              {imageRender(index)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenifitsofPurchase;

import React from "react";

const About = () => {
  return (
    <div class="container font-poppins card border border-0 m-2 mb-5 ">
      <div class="row lg:g-5 mx-md-5">
        <div class="col-md-5 me-md-5">
          <img
            src="./about/about-us.png"
            class="img-fluid w-full h-full"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <div class="card-body text-start">
            <h3 class="card-title lg:text-5xl text-3xl text-teal-800 font-semibold lg:mb-3 sm:mb-1 opacity-90 ">
              About us
            </h3>
            <p class="card-text lg:text-base text-sm text-slate-800 md:mb-4 mb-3">
              Instructor from around the world teach millions of students on
              Edfling coursee.We provide the tools and skills to teach what you
              love Edflings is a Global training provider based across the world
              that specialises in different different courses related to
              different domain.We provide you the best mentor with best courses
              Edflings is a Global training provider based across the world that
              specialises in different different courses related to different
              domain.We provide you the best mentor with best courses{" "}
            </p>
            <button className="btn btn-lg bg-teal-800 opacity-90 lg:w-1/3 text-white lg:text-base text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

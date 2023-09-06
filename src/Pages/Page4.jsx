import React from "react";
import Navbar from "../Components/Navbar";
import PageEnd from "../Components/PageEnd";
import Grid from "../Components/Grid";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import Button from "../Components/Button_page4";

const Page4 = () => {
  return (
    <>
      <main class="font-['Poppins']">
        <SearchBar/>
        <div className="container "style={{padding:"0 6.5rem"}}>
        <div className="container  ">
          <Card heading="Graphic Design Mentor" />
          <Button />
        </div>
        <div className="container  ">
          <Card heading="UI/UX Design Mentor" />
          <Button />
        </div>

        <div className="container  ">
          <Card heading="Marketing Mentor" />
          <Button />
        </div>

        <div className="container  ">
          <Card heading="Developement Mentor" />
          <Button />
        </div>
        </div>
        <Grid title="Personal Developement Mentor"/>
        <Grid title="Bussiness Mentor"/>
        <Grid title="Music Mentor"/>
        <Grid title="Academic Mentor"/>
      </main>
    </>
  );
};

export default Page4;















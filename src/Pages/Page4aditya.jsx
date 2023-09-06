import React from 'react'
import Navbar from "../Components/Navbar";
import PageEnd from "../Components/PageEnd";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import Button from "../Components/Button_page4"

function Page4aditya() {
    return (
        <>
          <main className="font-['Poppins']">
            <SearchBar />
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
          </main>
        </>
      );
}

export default Page4aditya

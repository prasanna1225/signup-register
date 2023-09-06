import React from "react";
// import "../../CSS/CertificateBanner.css";
import "./LeaderboardTopbar.css";
import { useState } from "react";

function LeaderboardTopbar() {
    const [selectedButton, setSelectedButton] = useState("Option 1");

    const handleButtonClick = (buttonText) => {
        setSelectedButton(buttonText);
    };
    return (
        <>
            {/* Certificate Banner */}
            <div className="w-[full] h-[260px] box-border md:ml-[35px] gradient relative ">
                <span className="Certificatefont mt-[68px] ml-[34px] md:ml-[44px] absolute">
                    Leaderboard
                </span>
                <span className=" CertificateSubtitle1 mt-[125px] ml-[34px] md:ml-[44px] absolute">
                    Compare with your batchmates and get a chance to emerge on top of our leaderboard
                </span>
                <br />
                <span className=" Certificatesubheading mt-[125px] ml-[34px] md:ml-[44px] absolute">
                    Guidelines
                </span>
                <br />
                <span className=" CertificateLineItems mt-[125px] ml-[34px] md:ml-[44px] absolute">
                    <div className="row">
                        <div className="column">
                            <ul>
                                <li>Feedback and Transparency</li>
                                <li>Privacy</li>
                                <li>Consistency</li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul>
                                <li>Fairness and Equality</li>
                                <li>Points calculation</li>
                                <li>Clear Rules and Guidelines</li>
                            </ul>
                        </div>
                    </div>
                </span>

            </div>

            <div className="w-[full] h-[150px] box-border md:ml-[35px] relative ">
                <div className="heading_container">
                    <h2 className="from_heading">Select Module to Check Leaderboard </h2>
                </div>
                <div className="buttons_container">
                    <button
                        className={
                            selectedButton === "Option 1"
                                ? "join_button selected"
                                : "join_button"
                        }
                        onClick={() => handleButtonClick("Option 1")}
                    >
                        Intro to Python
                    </button>
                    <button
                        className={
                            selectedButton === "Option 2"
                                ? "join_button selected"
                                : "join_button"
                        }
                        onClick={() => handleButtonClick("Option 2")}
                    >
                        Python Function and Loops
                    </button>
                    <button
                        className={
                            selectedButton === "Option 3"
                                ? "join_button selected"
                                : "join_button"
                        }
                        onClick={() => handleButtonClick("Option 3")}
                    >
                        Project 1
                    </button>
                    <button
                        className={
                            selectedButton === "Option 4"
                                ? "join_button selected"
                                : "join_button"
                        }
                        onClick={() => handleButtonClick("Option 4")}
                    >
                        Project 2
                    </button>
                </div>

            </div>

        </>
    );
}

export default LeaderboardTopbar;

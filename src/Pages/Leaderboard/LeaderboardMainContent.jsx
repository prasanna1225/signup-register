import React from "react";
import "./LeaderboardMainContent.css";

function LeaderboardMainContent() {
    const leaderboardData = [
        { rank: "1st", name: "John", college: "MIT", score: 1500 },
        { rank: "2nd", name: "Smith", college: "California University", score: 1200 },
        { rank: "3rd", name: "Gayle", college: "St Stephen's", score: 1100 },
        { rank: "4th", name: "Shalini", college: "Cambridge University", score: 1000 },
        // Add more data as needed
    ];

    return (
        <div className="leaderboard-container">
            <div className="w-full h-50px box-border md:ml-35px gradient">
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>
                                <span className="tableHeading first">
                                    Rank
                                </span>
                            </th>
                            <th>
                                <span className="tableHeading second">
                                    Name
                                </span>
                            </th>
                            <th>
                                <span className="tableHeading third">
                                    College
                                </span>
                            </th>
                            <th>
                                <span className="tableHeading fourth">
                                    Score
                                </span>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="w-full h-50px box-border md:ml-35px gradientBody">
                <table className="leaderboard-table">
                    <tbody>
                        {leaderboardData.map((entry, index) => (
                            <tr key={index}>
                                <td>
                                    <span className="first">
                                        {entry.rank}
                                    </span>
                                </td>
                                <td>
                                    <span className="second">
                                        {entry.name}
                                    </span>
                                </td>
                                <td>
                                    <span className="third">
                                        {entry.college}
                                    </span>
                                </td>
                                <td>
                                    <span className="fourth">
                                        {entry.score}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LeaderboardMainContent;

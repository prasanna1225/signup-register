import React from "react";
// import SideBarCourse from "../../Components/SidebarCourses";
import LeaderboardSidebar from "./LeaderboardSidebar";
// import CertificateBanner from "../../Components/CertificateBanner";
import LeaderboardTopbar from "./LeaderboardTopbar";
import LeaderboardMainContent from "./LeaderboardMainContent";
const Leaderboard = () => {
  return (
    <>
      <main className="mx-4 my-8 md:ml-16 md:mr-16 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/5 h-auto mb-8 md:mb-0 md:h-[1500px]">
          <LeaderboardSidebar />
        </div>
        <div className="w-full md:w-9/12 mx-2 h-auto">
          <LeaderboardTopbar />
          <LeaderboardMainContent />
        </div>
      </main>
    </>
  );
};

export default Leaderboard;

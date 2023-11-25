/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TASK] Announcements page
 *
 * [TODO] 1. You have to show all the announcements in this page announced by the owner.
 */

import AnnouncementCard from "../../Components/Dashboard/AnnouncementCard";

const Announcements = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="dashboard-heading">All Announcements</h2>
        <p className="sub-heading">Stay Informed, Stay Connected</p>
      </div>

      <div className="space-y-5">
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </div>
    </div>
  );
};

export default Announcements;

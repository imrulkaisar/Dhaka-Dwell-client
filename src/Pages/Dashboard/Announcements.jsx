/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TASK] Announcements page
 *
 * [TODO] 1. You have to show all the announcements in this page announced by the owner.
 */

import { Link } from "react-router-dom";

import AnnouncementCard from "../../Components/Dashboard/AnnouncementCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Announcements = () => {
  const axiosPublic = useAxiosPublic();

  const { data: announcements = [], isPending } = useQuery({
    queryKey: ["all announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements/get-all");

      return res.data;
    },
  });

  console.log(announcements);
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="dashboard-heading">All Announcements</h2>
        <p className="sub-heading">Stay Informed, Stay Connected</p>
      </div>

      <div className="">
        <Link
          to="/dashboard/create-announcement"
          className="btn bg-secondary text-white border rounded-lg inline-block capitalize tracking-normal"
        >
          Create an Announcement
        </Link>
      </div>

      <div className="space-y-5">
        {announcements.map((item) => (
          <AnnouncementCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;

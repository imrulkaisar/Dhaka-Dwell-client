/**
 * ==============================
 * Requirements
 * ==============================
 *
 * [TASK] Make announcements form
 *
 * [TODO] 1. This page will have a form with the following fields:
          ● Title
          ● Description
 * [TODO] 2. What announcement you will make is entirely up to you but make sure to keep it relevant.
 * [TODO] 3. 
 */

import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useToast from "../../Hooks/useToast";

const MakeAnnouncement = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleAddAnnouncement = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const message = form.message.value;
    const type = form.type.value;
    const recipients = form.recipients.value === "all" && [];

    const announcementData = {
      title,
      message,
      type,
      recipients,
    };

    try {
      const res = await axiosPublic.post(
        "/announcements/create",
        announcementData
      );

      if (res.data.success) {
        showToast("success", "New announcement created!");

        navigate("/dashboard/announcements");
      }
    } catch (error) {
      console.error(error);
    }

    console.log(announcementData);
  };
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="dashboard-heading">Make a new announcement</h2>
        <p className="sub-heading">Stay Informed, Stay Connected</p>
      </div>

      {/*  */}
      <form
        className="grid md:grid-cols-2 gap-5 max-w-3xl"
        onSubmit={handleAddAnnouncement}
      >
        <div className="form-group col-span-2">
          <label htmlFor="title">Announcement Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Announcement Title"
            className="form-input bg-white"
          />
        </div>
        <div className="form-group col-span-2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            className="form-input bg-white min-h-[200px]"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="type">Announcement Type</label>
          <select id="type" name="type" className="form-input bg-white">
            <option value="info">Info</option>
            <option value="notice">Notice</option>
            <option value="warning">Warning</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="recipients">Announcement Recipients</label>
          <select
            id="recipients"
            name="recipients"
            placeholder="Your message"
            className="form-input bg-white"
          >
            <option value="all">All Users</option>
            <option value="all-members">All Members</option>
            <option value="specific">Specific User</option>
          </select>
        </div>
        <button className="btn btn-primary mt-5 inline-block rounded-lg">
          Add announcement
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;

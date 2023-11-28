import {
  IoInformationCircleSharp,
  IoNotifications,
  IoWarning,
} from "react-icons/io5";

const AnnouncementCard = ({ data }) => {
  const { _id, title, message, type, recipients, seenby, createdAt } =
    data || {};

  const handleMarkAsRead = async () => {
    // mark as read code
    console.log("Mark as read!");
  };

  const handleDelete = async () => {
    // announce deleting code
    console.log("Announcement deleted!");
  };
  return (
    <div
      className={`relative p-4 border bg-blue-100 border-gray-300 rounded-lg bg-gray-5 ${
        type === "warning" && "bg-yellow-100"
      } ${type === "notice" && "bg-red-100"}`}
      role="alert"
    >
      <div
        className={`flex items-center text-blue-600 ${
          type === "warning" && "text-yellow-600"
        } ${type === "notice" && "text-red-600"}`}
      >
        {type === "info" && (
          <IoInformationCircleSharp className="text-xl mr-1" />
        )}
        {type === "warning" && <IoWarning className="text-xl mr-1" />}
        {type === "notice" && <IoNotifications className="text-xl mr-1" />}
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium text-inherit">{title}</h3>
      </div>
      <div className="mt-2 mb-4 text-sm text-gray-800">{message}</div>
      <div className="flex">
        <button
          type="button"
          className={`text-white bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center ${
            type === "warning" && "bg-yellow-600"
          } ${type === "notice" && "bg-red-600"}`}
        >
          <svg
            className="me-2 h-3 w-3 dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          View more
        </button>
        <button
          type="button"
          onClick={handleMarkAsRead}
          className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center capitalize"
          data-dismiss-target="#alert-additional-content-5"
          aria-label="Close"
        >
          mark as read
        </button>
      </div>

      <button
        onClick={handleDelete}
        className="absolute top-0 right-0 p-1 px-3 border bg-gray-100 rounded-full hover:bg-red-600 hover:text-white"
      >
        x
      </button>
    </div>
  );
};

export default AnnouncementCard;

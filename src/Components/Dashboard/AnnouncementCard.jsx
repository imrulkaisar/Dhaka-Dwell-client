const AnnouncementCard = () => {
  return (
    <div
      id="alert-additional-content-5"
      className="p-4 border bg-white border-gray-300 rounded-lg bg-gray-5"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium text-gray-800">
          This is a dark alert
        </h3>
      </div>
      <div className="mt-2 mb-4 text-sm text-gray-800">
        More info about this info dark goes here. This example text is going to
        run a bit longer so that you can see how spacing within an alert works
        with this kind of content.
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center"
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
          className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
          data-dismiss-target="#alert-additional-content-5"
          aria-label="Close"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default AnnouncementCard;

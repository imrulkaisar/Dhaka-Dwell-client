import useModal from "../../Contexts/useModal";
import Divider from "../Divider";
import Modal from "../Modal";

const ApartmentCard = ({ data }) => {
  const { _id, name, image, floor, block, number, description, details, rent } =
    data;

  const { isOpen, openModal, closeModal } = useModal();

  // console.log(Object.keys(data.details.gasFacilities).join(", "));

  return (
    <article className="min-h-min border rounded-lg overflow-hidden flex shadow-sm">
      <img className="w-1/3 h-full object-cover" src={image} alt="" />
      <div className="px-5 py-3 flex-grow space-y-2">
        <h4 className="font-semibold font-display">{name}</h4>
        <div className="text-xs">{description}</div>
        <div className="flex flex-wrap gap-x-2 text-sm text-gray-500 pt-2 border-t">
          <span>{details?.rooms} Rooms</span>
          <span>{details?.kitchen} Kitchens</span>
          <span>{details?.balconies} Balconies</span>
          <span>
            {details?.toilets?.common + details?.toilets?.attached} Toilets
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col justify-center items-center gap-5 border-l">
        <p className="text-xl font-medium">৳{rent}</p>
        <button
          onClick={openModal}
          className="btn btn-primary px-3 py-2 text-xs"
        >
          Agreement
        </button>
      </div>

      {isOpen && (
        <Modal onClose={closeModal}>
          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-center text-3xl font-medium font-display">
              {name}
            </h2>
            <Divider text="Info" />
            <ul className="grid grid-cols-2 gap-x-5 gap-y-1 font-semibold text-base list-disc marker:text-primary">
              <li>Floor no: {floor}</li>
              <li>Block name: {block}</li>
              <li>Apartment no: {number}</li>
            </ul>
            <Divider text="Facilities" />
            <ul className="grid grid-cols-2 gap-3 text-sm list-disc marker:text-primary capitalize">
              <li>{details?.rooms} Rooms</li>
              <li>{details?.kitchen} Kitchens</li>
              <li>{details?.balconies} Balconies</li>
              <li>
                {details?.toilets?.common + details?.toilets?.attached}(
                {details?.toilets?.common} + {details?.toilets?.attached})
                Toilets
              </li>
              {details?.gasFacilities?.available ? (
                <li>{details?.gasFacilities?.type} gas</li>
              ) : (
                ""
              )}
              {details?.waterFacilities ? <li>Pure Water</li> : ""}
            </ul>

            <p className="font-semibold text-xl">Monthly Rent: ৳{rent}</p>
            <button className="btn btn-primary">Send Request</button>
          </div>
        </Modal>
      )}
    </article>
  );
};

export default ApartmentCard;

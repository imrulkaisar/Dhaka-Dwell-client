/* eslint-disable react/prop-types */
import useModal from "../../Contexts/useModal";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useToast from "../../Hooks/useToast";
import useUserData from "../../Hooks/useUserData";
import Divider from "../Divider";
import Modal from "../Modal";

const ApartmentCard = ({ data }) => {
  const {
    _id: apartmentId,
    name,
    image,
    floor,
    block,
    number,
    description,
    facilities,
    rent,
  } = data || {};

  const { _id: memberId = "" } = useUserData({});

  const { isOpen, openModal, closeModal } = useModal();
  const axiosPublic = useAxiosPublic();
  const { showToast } = useToast();

  const handleSendRequest = async () => {
    const agreementData = {
      apartmentId,
      memberId,
    };

    try {
      const res = await axiosPublic.post("/agreements/request", agreementData);

      if (res.data.success) {
        closeModal();
        showToast("success", "Request send to admin!");
      } else {
        showToast("error", "Something wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(Object.keys(data.facilities.gasFacilities).join(", "));

  return (
    <article className="min-h-min border rounded-lg overflow-hidden flex shadow-sm">
      <img className="w-1/3 h-full object-cover" src={image} alt="" />
      <div className="px-5 py-3 flex-grow space-y-2">
        <h4 className="font-semibold font-display">{name}</h4>
        <div className="text-xs">{description}</div>
        <ul className="flex gap-x-5 flex-wrap gap-y-1 text-sm list-disc list-inside marker:text-primary">
          <li>
            Floor: <b>{floor}</b>
          </li>
          <li>
            Block: <b>{block}</b>
          </li>
          <li>
            Apartment No: <b>{number}</b>
          </li>
        </ul>
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
              <li>{facilities?.rooms} Rooms</li>
              <li>{facilities?.kitchen} Kitchens</li>
              <li>{facilities?.balconies} Balconies</li>
              <li>
                {facilities?.toilets?.common + facilities?.toilets?.attached}(
                {facilities?.toilets?.common} + {facilities?.toilets?.attached})
                Toilets
              </li>
              {facilities?.gasFacilities?.available ? (
                <li>{facilities?.gasFacilities?.type} gas</li>
              ) : (
                ""
              )}
              {facilities?.waterFacilities ? <li>Pure Water</li> : ""}
            </ul>

            <p className="font-semibold text-xl">Monthly Rent: ৳{rent}</p>
            <button onClick={handleSendRequest} className="btn btn-primary">
              Send Request
            </button>
          </div>
        </Modal>
      )}
    </article>
  );
};

export default ApartmentCard;

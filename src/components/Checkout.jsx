/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import Modal from "./Modal";

export default function Checkout({ selectedSeat }) {
  const [passengerNumber, setPassengerNumber] = useState("");
  const handleModal = () => {
    my_modal_5.showModal()
  }
  return (
    <div className="mt-4 lg:ml-4">
      <div>
        <p className="text-base">Passenger Name *</p>
        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <p className="text-base">Phone Number</p>
        <input
          onChange={(e) => setPassengerNumber(e.target.value)}
          id="phone_number"
          type="number"
          placeholder="Enter your email id"
          className="input input-bordered w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <p className="text-base">Email ID</p>
        <input
          type="email"
          placeholder="Enter your phone number"
          className="input input-bordered w-full mt-2"
        />
      </div>
      <div>
        <button
          disabled={passengerNumber && selectedSeat?.length > 0 ? false : true}
          onClick={handleModal}
          className="btn text-white w-full mt-4 bg-[#1DD100]"
        >
          Next
        </button>
        <Modal />
      </div>
      <div className="flex justify-around mt-4">
        <p className="border-b">Terms and Conditions</p>
        <p className="border-b">Cancellation Policy</p>
      </div>
    </div>
  );
}

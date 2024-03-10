import { useState } from "react";
import Paribahan from "./Paribahan";
import Seat from "./Seat";
import SeatCart from "./SeatCart";
/* eslint-disable react/no-unknown-property */
const seats = [
  {
    serial: "A",
    seatNo: ["A1", "A2", "A3", "A4"],
  },
  {
    serial: "B",
    seatNo: ["B1", "B2", "B3", "B4"],
  },
  {
    serial: "C",
    seatNo: ["C1", "C2", "C3", "C4"],
  },
  {
    serial: "D",
    seatNo: ["D1", "D2", "D3", "D4"],
  },
  {
    serial: "E",
    seatNo: ["E1", "E2", "E3", "E4"],
  },
  {
    serial: "F",
    seatNo: ["F1", "F2", "F3", "F4"],
  },
  {
    serial: "G",
    seatNo: ["G1", "G2", "G3", "4"],
  },
  {
    serial: "H",
    seatNo: ["H1", "H2", "H3", "H4"],
  },
  {
    serial: "I",
    seatNo: ["I1", "I2", "I3", "I4"],
  },
  {
    serial: "J",
    seatNo: ["J1", "J2", "J3", "J4"],
  },
];
export default function SeatSelection() {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [totalSeat, setTotalSeat] = useState(40);
  const handleSelectedSeat = (seatNo) => {
    if (!selectedSeat.includes(seatNo)) {
      if (selectedSeat.length < 4) {
        setSelectedSeat((prev) => [...prev, seatNo]);
        setTotalSeat(totalSeat - 1);
      } else {
        alert('seat selection over!! maximum selected four tickets')
      }
    } else {
      alert("seat already selected!!!");
    }
  };
  return (
    <div
      id="buy_tickets"
      className="bg-[#F7F8F8] border-t-2 py-20 mt-20 border-[#1DD100] rounded-t-lg"
    >
      <div className="max-w-[1170px] mx-auto">
        <h1 className="text-center text-[40px] font-bold">P.H Paribahan</h1>
        <p className="text-center mt-2">
          P.H paribahan is business className bus. thats includes air condition.
          and provide premium services until you get in destination.
        </p>

        <Paribahan totalSeat={totalSeat} />
        <div className="mt-4 bg-white p-5 rounded-xl flex justify-between flex-col lg:flex-row">
          <div className="lg:w-7/12 w-full border-r border-dashed">
            <h1 className="text-2xl font-semibold">Select Your Seat</h1>
            <div className="border mr-4 mt-4 border-dashed border-[#03071233] border-opacity-30"></div>
            <div className="flex justify-between items-center mt-4 mr-4">
              <div>
                <button className="btn bg-transparent border-none">
                  <img src="./images/seat-gray.png" alt="" />
                  <p>Available</p>
                </button>
              </div>
              <div>
                <button className="btn bg-transparent border-none">
                  <img src="./images/seat-green-filled.png" alt="" />
                  <p className="text-[#1DD100]">Selected</p>
                </button>
              </div>
            </div>
            <div className="border mt-4 mr-4 border-dashed border-[#03071233] border-opacity-30"></div>
            <div className="mt-4 mr-4 flex justify-end">
              <button className="btn px-10">
                <img src="./images/tabler-icon-steering-wheel.png" alt="" />
              </button>
            </div>
            <div className="mt-4 mr-4">
              {seats?.map((seat, index) => (
                <Seat
                  key={index}
                  seatSerial={seat.serial}
                  seatNo={seat.seatNo}
                  handleSelectedSeat={handleSelectedSeat}
                  selectedSeat={selectedSeat}
                />
              ))}
            </div>
          </div>
          <SeatCart selectedSeat={selectedSeat} />
        </div>
      </div>
    </div>
  );
}

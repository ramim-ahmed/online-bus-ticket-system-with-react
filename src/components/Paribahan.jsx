/* eslint-disable react/prop-types */
import busIcon from '../assets/images/bus-logo.png';
import fareIcon from '../assets/images/fare.png'
export default function Paribahan({totalSeat}) {
  return (
    <div className="flex lg:flex-row flex-col justify-between bg-white rounded-xl mt-20">
      <div className="lg:w-8/12 w-full p-5">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={busIcon} alt="" />
            <div>
              <h2 className="font-bold lg:text-[32px] text-2xl">
                Greenline Paribahan
              </h2>
              <p className="text-lg font-medium text-[#03071299]">
                Coach-009-WEB ! AC_Business
              </p>
            </div>
          </div>
          <div>
            <button className="btn bg-[#1DD1001A] text-[#1DD100] text-lg font-semibold border border-[#1DD10066]">
              <img src="./images/seat-green.png" alt="" />
              <span id="total_seat">{totalSeat}</span>Seats left
            </button>
          </div>
        </div>
        <div className="bg-[#F7F8F8] py-10 px-5 rounded-xl mt-10">
          <div className="flex justify-between">
            <p>Route</p>
            <p className="text-lg font-semibold text-[#030712]">
              Dhaka - Sylhet
            </p>
          </div>
          <div className="border mt-4 border-dashed border-[#03071233] border-opacity-30"></div>
          <div className="flex justify-between mt-4">
            <p>Departure Time</p>
            <p className="text-lg font-semibold text-[#030712]">9:00 PM</p>
          </div>
          <div className="border mt-4 border-dashed border-[#03071233] border-opacity-30"></div>
          <div className="space-x-4 mt-4">
            <button type="button" className="btn bg-[#0307120D] btn-sm">
              Boarding Point - Laxmipur
            </button>
            <button type="button" className="btn bg-[#0307120D] btn-sm">
              Dropping Point - Bogura
            </button>
            <button type="button" className="btn bg-[#0307120D] btn-sm">
              Est. Time - 11 Hour
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/12 w-full hidden lg:block">
        <img src="./images/info-devider.png" alt="" />
      </div>
      <div className="lg:w-3/12 w-full flex justify-center items-center">
        <div>
          <div className="flex justify-center">
            <img src={fareIcon} alt="" />
          </div>
          <h1 className="text-[32px] text-center font-bold text-[#030712]">
            550 Taka
          </h1>
          <p className="text-2xl text-center text-[#03071299] font-semibold">
            Per Seat
          </p>
        </div>
      </div>
    </div>
  );
}

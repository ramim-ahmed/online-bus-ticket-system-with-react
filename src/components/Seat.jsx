/* eslint-disable react/prop-types */
export default function Seat({ seatSerial, seatNo, handleSelectedSeat, selectedSeat }) {
  return (
    <div className="flex w-full items-center mt-3">
      <p>{seatSerial}</p>
      <div className="flex ml-10 w-full justify-between">
        {seatNo.map((no) => (
          <button
            disabled={selectedSeat.includes(no) ? true : false}
            onClick={() => handleSelectedSeat(no)}
            key={no}
            id="A1"
            className={`seat btn disabled:bg-[#1DD100] disabled:text-white hover:bg-[#1DD100] hover:text-white  text-[#03071280] shadow-none lg:px-12 ${selectedSeat.includes(no) ? 'bg-[#1DD100]' : "bg-[#F7F8F8]"}`}
            type="button"
          >
            {no}
          </button>
        ))}
      </div>
    </div>
  );
}

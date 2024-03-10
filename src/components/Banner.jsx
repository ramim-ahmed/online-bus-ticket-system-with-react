
export default function Banner() {
  return (
    <div className="max-w-[1170px] mx-auto mt-5 p-2">
        <div
          className="bg-[url('./assets/images/banner.png')] h-[550px] object-cover flex justify-center items-center"
        >
          <div className="text-center">
            <h1 className="text-[64px] font-extrabold text-white">
              End-to-End Travel with
            </h1>
            <h1 className="text-[64px] font-extrabold text-[#1DD100]">
              P Paribahan
            </h1>
            <p className="text-white text-lg">
              Connect best travel that gives you flexibility in whole journery.
              <br />
              Our first priority to commited to provide best economy service our
              passenger.
            </p>
            <a
              href="#buy_tickets"
              className="btn mt-4 bg-[#1DD100] border-none text-[#030712] text-xl font-bold"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
  )
}

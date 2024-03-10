import peopoleImgIcon from '../assets/images/people.png';
import ticketCouponIcon from '../assets/images/ticket-cupon.png';
import stoppageIcon from '../assets/images/stoppage.png';
export default function Achive() {
  return (
    <div className="max-w-[1170px] mx-auto">
        <div className="flex justify-center lg:-mt-14 lg:py-0 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            <div
              className="flex items-center bg-white rounded-lg p-4 border-b-2 border-[#1DD100]"
            >
              <img src={peopoleImgIcon} alt="" />
              <div className="ml-2">
                <h2 className="text-4xl font-bold">500k+</h2>
                <p>Registered users</p>
              </div>
            </div>
           
            <div
              className="flex items-center bg-white rounded-lg p-4 border-b-2 border-[#1DD100]"
            >
              <img src={ticketCouponIcon} alt="" />
              <div className="ml-2">
                <h2 className="text-4xl font-bold">1.7 lacks</h2>
                <p>Tickets sold</p>
              </div>
            </div>
           
            <div
              className="flex items-center bg-white rounded-lg p-4 border-b-2 border-[#1DD100]"
            >
              <img src={stoppageIcon} alt="" />
              <div className="ml-2">
                <h2 className="text-4xl font-bold">80k+</h2>
                <p>Rental partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

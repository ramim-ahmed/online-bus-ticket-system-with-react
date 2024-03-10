export default function Offers() {
  return (
    <div className="max-w-[1170px] mx-auto mt-20 p-2">
      <h1 className="text-center text-[40px] font-bold">Best offers for you</h1>
      <div className="flex justify-between flex-col lg:flex-row gap-x-10 items-center mt-20">
        <div className="flex w-full lg:w-1/2 bg-[#FFBF0F] items-center justify-between rounded-xl">
          <div className="p-10">
            <h1 className="text-[40px] font-extrabold">15% OFF</h1>
            <h3 className="text-xl font-semibold">on your next purchase</h3>
            <p className="text-lg font-medium text-[#03071266]">
              use by January 2024
            </p>
          </div>
          <img src="./images/cupon-devider.png" alt="" />
          <div className="p-10">
            <h1 className="text-[32px] font-bold">NEW15</h1>
            <p className="text-xl font-medium text-[#03071266]">Coupon Code</p>
          </div>
        </div>
        <div className="flex w-full lg:mt-0 mt-5 lg:w-1/2 bg-[#F78C9C] items-center justify-between rounded-xl">
          <div className="p-8">
            <h1 className="text-[40px] font-extrabold">20% OFF</h1>
            <h3 className="text-xl font-semibold">on your next purchase</h3>
            <p className="text-lg font-medium text-[#03071266]">
              use by January 2024
            </p>
          </div>
          <img src="./images/cupon-devider.png" alt="" />
          <div className="p-8">
            <h1 className="text-[32px] font-bold">Couple 20</h1>
            <p className="text-xl font-medium text-[#03071266]">Coupon Code</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button
          type="button"
          className="btn bg-transparent border-2 text-[#1DD100] text-xl font-bold rounded-xl border-[#1DD100]"
        >
          See All Offers
        </button>
      </div>
    </div>
  );
}

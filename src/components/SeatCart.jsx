/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import Checkout from "./Checkout";

export default function SeatCart({ selectedSeat }) {
  const [couponCode, setCouponCode] = useState("");
  const [grandTotal, setGrandTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const totalAmount = selectedSeat?.length * 550 || 0;
  const handleCoupon = () => {
    if (couponCode === "NEW15") {
      const discountAmount = (totalAmount * 15) / 100;
      const total = totalAmount - discountAmount;
      setDiscount(discountAmount);
      setGrandTotal(total);
    } else if (couponCode === "Couple 20") {
      const discountAmount = (totalAmount * 20) / 100;
      const total = totalAmount - discountAmount;
      setDiscount(discountAmount);
      setGrandTotal(total);
    }
  };

  return (
    <div className="lg:w-5/12 w-full mt-10 lg:mt-0">
      <h1 className="lg:ml-4 text-2xl font-semibold">Select Your Seat</h1>
      <div className="border lg:ml-4 mt-4 border-dashed border-[#03071233] border-opacity-30"></div>
      <div className="bg-[#F7F8F8] lg:ml-4 p-4 rounded-lg mt-4">
        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold">
              Seat
              <span
                id="counting"
                className="bg-[#1DD100] text-white px-2 text-sm font-bold rounded-lg"
              >
                {selectedSeat?.length}
              </span>
            </p>
            <p className="font-bold">className</p>
            <p className="font-bold">Price</p>
          </div>
          <div className="border mt-4 border-dashed border-[#03071233] border-opacity-30"></div>

          <div id="seat_selection_container">
            {selectedSeat?.map((seat, index) => (
              <div
                key={index}
                className="flex justify-between items-center mt-4"
              >
                <p>{seat}</p>
                <p>Economy</p>
                <p>550</p>
              </div>
            ))}
          </div>
          <div className="border mt-4 border-solid border-[#03071233] border-opacity-20"></div>
          <div className="flex justify-between mt-4">
            <p className="font-bold text-base text[#030712]">Total Price</p>
            <p className="font-bold text-base text[#030712]">
              BDT <span id="total_price">{totalAmount}</span>
            </p>
          </div>
          <div
            id="discount_amount_container"
            className={`flex justify-between mt-4 ${
              discount ? "block" : "hidden"
            }`}
          >
            <p>Discount Amount</p>
            <p id="discount_amount">{discount}</p>
          </div>
          <div
            id="coupon_container"
            className={`bg-white flex justify-between p-2 items-center rounded mt-4 ${discount && 'hidden'}`}
          >
            <input
              onChange={(e) => setCouponCode(e.target.value)}
              id="coupon_input"
              placeholder="Have any copupon?"
              type="text"
              className="w-full px-4 outline-none py-2 rounded-sm"
            />
            <button
              disabled={couponCode && selectedSeat.length >=4 ? false : true}
              onClick={handleCoupon}
              id="coupon_apply_button"
              className="btn px-10 bg-[#1DD100] text-white"
            >
              Apply
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <p className="font-bold text-base text[#030712]">Grand Total</p>
            <p className="font-bold text-base text[#030712]">
              BDT
              <span className="font-bold" id="grand_price">
                {grandTotal || totalAmount}
              </span>
            </p>
          </div>
        </div>
      </div>
      <Checkout selectedSeat={selectedSeat} />
    </div>
  );
}

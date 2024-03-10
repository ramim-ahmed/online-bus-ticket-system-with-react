import successImg from "../assets/images/success.png";
export default function Modal() {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box flex flex-col items-center">
        <img src={successImg} alt="" />
        <h3 className="font-bold text-[#27AE60] text-2xl mt-10">SUCCESS</h3>
        <div className="mt-6 text-center">
          <p className="text-xl text-[#4A4A4A] font-medium">
            Thank you for Booking Our Bus Seats.
          </p>
          <p className="text-xl text-[#4A4A4A] font-medium">
            We are working hard to find the best service and deals for you.
          </p>
          <p className="text-xl font-light text-[#4A4A4A]">
            Shortly you will find a confirmation in your email.
          </p>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <a
              href="/"
              id="continue"
              className="btn btn-wide bg-[#27AE60] text-white text-xl font-semibold"
            >
              Continue
            </a>
          </form>
        </div>
      </div>
    </dialog>
  );
}

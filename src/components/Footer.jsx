export default function Footer() {
  return (
    <footer className="bg-[#030712] text-white py-10">
        <div className="max-w-[1170px] mx-auto">
          <div className="footer justify-between p-7">
            <aside>
              <h1 className="text-4xl font-extrabold">P-Ticket</h1>
              <p className="text-lg text-[#ffffffCC]">
                P-Ticket is a digital platform to make your
              </p>
              <p className="text-lg text-[#ffffffCC]">daily commuting better.</p>
            </aside>
            <nav>
              <p className="text-xl font-semibold">Download our app</p>
              <button className="btn bg-transparent">
                <img src="./images/playstore.png" alt="" />
                <div className="text-left py-1">
                  <p className="text-white">GET IT ON</p>
                  <p className="text-white text-xl font-normal">Google Play</p>
                </div>
              </button>
            </nav>
          </div>
          <div className="p-7">
            <p
              className="border-b-2 border-dashed border-opacity-30 border-white"
            ></p>
          </div>
          <div className="p-7 flex flex-col lg:flex-row justify-between">
            <p className="text-[#ffffffCC] text-base">
              @all rights reserved, P-Ticket services limited.2024
            </p>
            <div
              className="flex flex-col mt-4 lg:mt-0 lg:flex-row items-start lg:items-center lg:space-x-10 lg:space-y-0 space-y-3"
            >
              <p className="text-base">Terms & condition</p>
              <p className="text-base">Return & refund policy</p>
              <p className="text-base">Privacy policy</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

/* eslint-disable react/no-unknown-property */

export default function Header() {
  return (
    <header>
        <div className="max-w-[1170px] mx-auto">
          <div className="navbar py-5 bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabindex="0"
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li><a className="font-medium text-lg">Home</a></li>
                  <li><a className="font-medium text-lg">About</a></li>
                  <li><a className="font-medium text-lg">Destination</a></li>
                  <li><a className="font-medium text-lg">Search</a></li>
                </ul>
              </div>
              <a className="btn btn-ghost text-4xl font-extrabold">P-Ticket</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a className="font-medium text-lg">Home</a></li>
                <li><a className="font-medium text-lg">About</a></li>
                <li><a className="font-medium text-lg">Destination</a></li>
                <li><a className="font-medium text-lg">Search</a></li>
              </ul>
            </div>
            <div className="navbar-end">
              <a
                className="btn bg-[#1DD1001A] text-xl font-bold border border-[#1DD10066]"
                >Bus
                <img src="./images/bus-icon.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
  )
}

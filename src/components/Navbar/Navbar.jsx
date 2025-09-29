import Logo from "../../assets/logo.png";
import CoinImg from "../../assets/coin.svg";
import Container from "../Layout/Container";

const Navbar = ({ coin }) => {
  return (
    <section className="">
      <Container>
        <div className="navbar justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fixture</a>
                </li>
                <li>
                  <a>Teams</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
              </ul>
            </div>
            <a href="/" className="">
              <img className="w-16 h-16" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal space-x-5 px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div className="ms-5 flex gap-2 items-center text-[#131313] text-sm border border-gray-100 rounded-2xl p-2">
            <span>{coin}</span>
            <span>Coin</span>
            <figure className="w-5 h-5">
              <img src={CoinImg} alt="coin" className="w-full h-full" />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;

import React from "react";
import Container from "../Layout/Container";

const TabBar = ({ title, toggle, setTab }) => {
  return (
    <div className="mt-20 mb-5">
      <Container>
        <div className="flex max-sm:flex-col justify-between items-center gap-5">
          <h3 className="text-xl sm:text-[28px] font-semibold">{title}</h3>
          <div className="">
            <button
              onClick={() => setTab("available")}
              className={`btn  border-0 rounded-e-none rounded-s-xl ${
                toggle === "available"
                  ? "bg-[#E7FE29]"
                  : "bg-transparent text-gray-600"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setTab("selected")}
              className={`btn border-0 rounded-s-none rounded-e-xl ${
                toggle === "selected"
                  ? "bg-[#E7FE29]"
                  : "bg-transparent text-gray-600"
              }`}
            >
              Selected (0)
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TabBar;

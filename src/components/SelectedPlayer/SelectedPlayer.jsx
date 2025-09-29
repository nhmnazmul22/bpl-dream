import React from "react";
import Container from "../Layout/Container";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayer = () => {
  return (
    <section>
      <Container>
        <div className="space-y-5">
          <SelectedPlayerCard />
          <SelectedPlayerCard />
          <SelectedPlayerCard />
        </div>
        <button className="btn border-0 rounded-xl  bg-[#E7FE29] ring-1 ring-gray-black ring-offset-4 ring-offset-white hover:border-0  mt-10">
          Add More Player
        </button>
      </Container>
    </section>
  );
};

export default SelectedPlayer;

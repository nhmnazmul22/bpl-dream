import React from "react";
import Container from "../Layout/Container";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayer = ({ selectedPlayers, handleRemovePlayer, setTab }) => {
  return (
    <section>
      <Container>
        <div className="space-y-5">
          {selectedPlayers.length > 0 ? (
            selectedPlayers.map((player) => (
              <SelectedPlayerCard
                key={player.id}
                player={player}
                handleRemovePlayer={handleRemovePlayer}
              />
            ))
          ) : (
            <p>No Player Selected</p>
          )}
        </div>
        <button
          onClick={() => setTab("available")}
          className="btn border-0 rounded-xl  bg-[#E7FE29] ring-1 ring-gray-black ring-offset-4 ring-offset-white hover:border-0  mt-10"
        >
          Add More Player
        </button>
      </Container>
    </section>
  );
};

export default SelectedPlayer;

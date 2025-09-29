import React, { use } from "react";
import Container from "../Layout/Container";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayer = ({ playerPromise, handleSelectedPlayer }) => {
  const plyersData = use(playerPromise);
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-5 items-start">
          {plyersData.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              handleSelectedPlayer={handleSelectedPlayer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AvailablePlayer;

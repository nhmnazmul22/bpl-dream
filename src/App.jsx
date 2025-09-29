import { Suspense, useState } from "react";
import AvailablePlayer from "./components/AvailablePlayer/AvailablePlayer";
import Hero from "./components/Hero/Hero";
import TabBar from "./components/TabBar/TabBar";
import Loading from "./components/Fallback/Loading";
import Subscribe from "./components/Subscribe/Subscribe";
import SelectedPlayer from "./components/SelectedPlayer/SelectedPlayer";
import Layout from "./components/Layout/Layout";
import { fetchPlayers } from "./lib/api";
import "./App.css";

const playerPromise = fetchPlayers();

function App() {
  const [tab, setTab] = useState("available");
  const [coin, setCoin] = useState("6000000000");
  const [selectedPlayers, setSelectedPlayer] = useState([]);

  const handleSelectedPlayer = (player) => {
    const newSelectedPlayer = [...selectedPlayers, player];
    setSelectedPlayer(newSelectedPlayer);

    const leftCoin = Number(coin) - Number(player.price);
    setCoin(leftCoin);
  };

  const handleRemovePlayer = (player) => {
    const newPlayers = selectedPlayers.filter((p) => p.id !== player.id);
    setSelectedPlayer(newPlayers);
    const availableCoin = Number(coin) + Number(player.price);
    setCoin(availableCoin);
  };

  return (
    <>
      <Layout coin={coin}>
        <Hero></Hero>
        <TabBar
          title={
            tab === "available"
              ? "Available Players"
              : `Selected Players (${selectedPlayers.length}/6)`
          }
          toggle={tab}
          setTab={setTab}
          selectedPlayersLength={selectedPlayers.length}
        ></TabBar>
        {tab === "available" && (
          <Suspense fallback={<Loading />}>
            <AvailablePlayer
              playerPromise={playerPromise}
              handleSelectedPlayer={handleSelectedPlayer}
            ></AvailablePlayer>
          </Suspense>
        )}
        {tab === "selected" && (
          <SelectedPlayer
            selectedPlayers={selectedPlayers}
            handleRemovePlayer={handleRemovePlayer}
            setTab={setTab}
          ></SelectedPlayer>
        )}
        <Subscribe></Subscribe>
      </Layout>
    </>
  );
}

export default App;

import { Suspense } from "react";
import "./App.css";
import AvailablePlayer from "./components/AvailablePlayer/AvailablePlayer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TabBar from "./components/TabBar/TabBar";
import { fetchPlayers } from "./lib/api";
import Loading from "./components/Fallback/Loading";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  const playerPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TabBar title="Available Players" toggle="available"></TabBar>
      <Suspense fallback={<Loading />}>
        <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
      </Suspense>
      <Subscribe></Subscribe>
    </>
  );
}

export default App;

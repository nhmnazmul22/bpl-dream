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

function App() {
  const [tab, setTab] = useState("available");
  const playerPromise = fetchPlayers();

  return (
    <>
      <Layout>
        <Hero></Hero>
        <TabBar
          title={
            tab === "available" ? "Available Players" : `Selected Players (4/6)`
          }
          toggle={tab}
          setTab={setTab}
        ></TabBar>
        {tab === "available" && (
          <Suspense fallback={<Loading />}>
            <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
          </Suspense>
        )}
        {tab === "selected" && <SelectedPlayer></SelectedPlayer>}
        <Subscribe></Subscribe>
      </Layout>
    </>
  );
}

export default App;

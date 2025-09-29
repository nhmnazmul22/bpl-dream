import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TabBar from "./components/TabBar/TabBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TabBar title="Available Players" toggle="available"></TabBar>
    </>
  );
}

export default App;

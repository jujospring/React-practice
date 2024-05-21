import './App.css'
// import Slot from "./Slot"
// import PropertyList from "./PropertyList"
// import Clicker from './Clicker';
// import Box from "./Box";
import LottaBoxes from './LottaBoxes';

// const properties = [
//   {id: 129031, name: "Desert Yurt", rating: 4.9, price: 150},
//   {id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250},
//   {id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300},
//   {id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120},
//   {id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140},
//   {id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96},
// ];

const colorList = [
    "5CCD91",
    "0821E4",
    "86929A",
    "85F1B6",
    "1CA495",
    "EDA4FD",
    "E73A29",
    "0D7877",
    "AF321C",
    "1B923F",
  ];

function App() {
  return (
    <div>
      {/* <Slot val1="00" val2="00" val3="00"/> */}

      {/* <PropertyList properties={properties}/> */}

      {/* <Clicker message="Hello there" buttonText="Click"/>
      <Clicker message="Stop clicking" buttonText="Don't Click"/> */}

      <LottaBoxes colors = {colorList} num = {25}/>
    </div>
  );
}

export default App

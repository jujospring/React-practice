import './App.css'
// import Slot from "./Slot"
// import PropertyList from "./PropertyList"
import Clicker from './Clicker';

// const properties = [
//   {id: 129031, name: "Desert Yurt", rating: 4.9, price: 150},
//   {id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250},
//   {id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300},
//   {id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120},
//   {id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140},
//   {id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96},
// ];

function App() {
  return (
    <div>
      {/* <Slot val1="00" val2="00" val3="00"/> */}
      {/* <PropertyList properties={properties}/> */}
      <Clicker message="Hello there" buttonText="Click"/>
      <Clicker message="Stop clicking" buttonText="Don't Click"/>
    </div>

  );
}

export default App

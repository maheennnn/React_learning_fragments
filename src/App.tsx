import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems: string[] = [];
  // let emptyMessage = foodItems.length === 0 ? <h3>I'm still hungry</h3> : null;
  // if (foodItems.length === 0) {
    //   return <h3>I'm still hungry</h3>;
    // }
    
  // let foodItems = ["Vegetables", "Milk", "Steamed Meat", "Dry Fruits", "Yougurt", "Butter"];



  return (
    <>
      <div className="listmain">
          <h1 style={{ textAlign: "center" }}>Healthy Foods:</h1>
          <ErrorMessage></ErrorMessage>
          <FoodItems></FoodItems>
      </div>
    </>
  );
}

export default App;

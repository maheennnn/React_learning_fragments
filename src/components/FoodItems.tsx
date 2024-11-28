import Item from "./Item";
const FoodItems = () => {
  let foodItems = [
    "Vegetables",
    "Milk",
    "Steamed Meat",
    "Dry Fruits",
    "Yougurt",
    "Butter",
  ];
  return (
    <ul className="list-group">
      {foodItems.map((items) => (
      <Item key={items} foodItem={items} ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
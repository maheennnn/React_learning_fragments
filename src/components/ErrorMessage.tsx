const ErrorMessage = () =>{
  let foodItems = [
    "Vegetables",
    "Milk",
    "Steamed Meat",
    "Dry Fruits",
    "Yougurt",
    "Butter",
  ];

  return(
    <>
    {foodItems.length===0 && <h3>I'm still hungry</h3>}
    </>
  );
}
export default ErrorMessage;
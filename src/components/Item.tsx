const Item = (props:any) => {
  return (
    <>
    <li className="list-group-item">
      {props.foodItem}
    </li>
    </>
  );
};
export default Item; 
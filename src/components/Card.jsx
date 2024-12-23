const Card = (props) => {
  return (
    <div className="xx">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.imgUrl} alt="" />
      {/* <img src={props.imgUrl} alt="" /> */}
    </div>
    // <div>
    //   <img
    //     src="https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=640"
    //     alt=""
    //   />
    // </div>
  );
};
export default Card;

const Card = (props) => {
  return (
    <div className="xx">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.imgUrl} alt="" />
    </div>
  );
};
export default Card;

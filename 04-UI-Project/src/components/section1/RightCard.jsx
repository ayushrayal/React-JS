import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
  return (
    <div className="h-full w-65 rounded-4xl bg-yellow-200 relative overflow-hidden shrink-0">
      <img
        className="h-full w-full object-cover rounded-4xl img-pan"
        src={props.img}
        alt=""
      />
      <RightCardContent h={props.h} color={props.color} />
    </div>
  );
};

export default RightCard;

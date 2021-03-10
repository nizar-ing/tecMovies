//Input -> liked: boolean
//Output -> onClick Event

const Like = (props) => {
  let clsIcon = "";
  clsIcon += props.liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      className={clsIcon + " float-right"}
      style={{ color: "#cc0000", cursor: "pointer" }}
      aria-hidden='true'
      onClick={props.onClick}
    ></i>
  );
};

export default Like;

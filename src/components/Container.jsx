import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Container() {
  return (
    <div className="flex">
      <LeftSide />
      <RightSide />
    </div>
  );
}

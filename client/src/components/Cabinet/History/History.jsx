import { Link } from "react-router-dom";
import Links from "../Links/Links";
const History = () => {
  return (
    <div className="profile">
      <Links />
      <div className="empty-block">No purchases were found</div>
    </div>
  );
};
export default History;

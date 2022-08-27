import { Link } from "react-router-dom";
import Links from "../Links/Links";
const Wishlist = () => {
  return (
    <div className="profile">
      <Links />
      <div className="empty-block">Your wishlist is empty</div>
    </div>
  );
};
export default Wishlist;

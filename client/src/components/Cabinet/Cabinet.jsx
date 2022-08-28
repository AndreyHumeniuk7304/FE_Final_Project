import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout/Logout";

const Cabinet = () => {
  const isAdmin = useSelector((state) => state.userAccount.customer.isAdmin);
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const nav = useNavigate();

  useEffect(() => {
    !isLogin ? nav("/my-account/entry") : nav("/my-account/user");
  }, [isLogin]);

  return (
    <div className="my-account">
      {isAdmin ? (
        <div className="my-account__container width">
          <div className="my-account__welcome">
            <h3 className="my-account__welcome--title">Welcome Admin</h3>
          </div>
          <div className="my-account__block">
            <Link className="link-container" to="/my-account/create-product">
              <div className=" my-account__profile my-account__section">
                <div className="icon-container">
                  <img src="../images/create-product.png" alt="create card" />
                </div>
                <div>
                  <h4 className="my-account__section--title">Create product</h4>
                  <span className="my-account__section--text">
                    You can create a new product
                  </span>
                </div>
              </div>
            </Link>
            <Link className="link-container" to="/my-account/update-product">
              <div className=" my-account__history my-account__section">
                <div className="icon-container">
                  <img src="../images/update-product.png" alt="update card" />
                </div>
                <div>
                  <h4 className="my-account__section--title">Update product</h4>
                  <span className="my-account__section--text">
                    You can change product information
                  </span>
                </div>
              </div>
            </Link>
            <Link className="link-container" to="/my-account/delete-product">
              <div className=" my-account__wishlist my-account__section">
                <div className="icon-container">
                  <img src="../images/delete-product.png" alt="delete card" />
                </div>
                <div>
                  <h4 className="my-account__section--title">Delete product</h4>
                  <span className="my-account__section--text">
                    You can drop product
                  </span>
                </div>
              </div>
            </Link>
            <Logout />
          </div>
        </div>
      ) : (
        <div className="my-account__container">
          <div className="my-account__welcome">
            <h3 className="my-account__welcome--title">
              Welcome{" "}
              <span className="my-account__welcome--name"> NAME NAME</span>
            </h3>
          </div>
          <div className="my-account__block">
            <Link className="link-container" to="/my-account/profile">
              <div className=" my-account__profile my-account__section">
                <div className="icon-container">
                  <svg
                    className=" my-account__icon"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4615 15H1.53846C1.53846 15 1 15 1 13.3846C1 11.7692 1.53846 11.7692 1.53846 11.7692L6.38462 9.07692C6.38462 9.07692 5.63482 8.14552 5.30769 7.46154C5.02079 6.86165 4.76923 5.84615 4.76923 5.84615C4.76923 5.84615 4.14326 3.71084 4.76923 2.61538C5.46909 1.39063 5.84615 1 8 1C10.1538 1 10.6923 1.53846 11.2308 2.61538C11.7692 3.69231 11.5045 4.6145 11.2308 5.84615C10.9248 7.22318 9.61539 9.07692 9.61539 9.07692L14.4615 11.7692C14.4615 11.7692 15 11.7692 15 13.3846C15 15 14.4615 15 14.4615 15Z"
                      stroke="#ffffff"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="my-account__section--title">My profile</h4>
                  <span className="my-account__section--text">
                    Show and update your personal information
                  </span>
                </div>
              </div>
            </Link>
            <Link className="link-container" to="/my-account/history">
              <div className=" my-account__history my-account__section">
                <div className="icon-container">
                  <svg
                    className=" my-account__icon"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.1204 11.3369H30.8291C31.0981 12.7632 30.4521 14.2668 29.0705 15.0741C28.4599 15.4306 27.7594 15.6192 27.0438 15.6192C25.6973 15.6192 24.4709 14.9742 23.7634 13.8937C23.2631 13.1295 23.1009 12.2143 23.2684 11.3368H12.7318C12.8985 12.2143 12.7365 13.1294 12.2362 13.8942C11.5293 14.9741 10.3029 15.6191 8.95646 15.6191C8.24031 15.6191 7.53985 15.4305 6.92894 15.0741C5.54761 14.2667 4.90143 12.7631 5.17073 11.3368H2.87949C1.28892 11.3368 0 12.5541 0 14.0563C0 15.5577 1.28892 16.7749 2.87949 16.7749H3.19712L5.30875 28.9042C5.53016 30.173 6.69096 31.1048 8.05329 31.1048H27.9466C29.3089 31.1048 30.4697 30.173 30.691 28.9042L32.8019 16.7751H33.1204C34.7109 16.7751 36 15.5577 36 14.0564C36 12.5542 34.7107 11.3369 33.1204 11.3369ZM12.2782 27.9583C12.1913 27.9704 12.1052 27.9767 12.0199 27.9767C11.1795 27.9767 10.4429 27.3955 10.3134 26.5867L9.11751 19.0589C8.97589 18.1675 9.62581 17.3369 10.5697 17.2032C11.5147 17.0733 12.3924 17.6833 12.5346 18.5741L13.7307 26.1026C13.8723 26.9937 13.2221 27.8245 12.2782 27.9583ZM19.7278 26.3444C19.7278 27.2461 18.9548 27.9765 18.0006 27.9765C17.046 27.9765 16.2733 27.2458 16.2733 26.3444V18.8161C16.2733 17.9154 17.0461 17.1848 18.0006 17.1848C18.9548 17.1848 19.7278 17.9154 19.7278 18.8161V26.3444ZM26.883 19.0588L25.6863 26.5865C25.5577 27.3955 24.8212 27.9766 23.9808 27.9766C23.8951 27.9766 23.8093 27.9703 23.7221 27.9582C22.7783 27.8244 22.1283 26.9936 22.2699 26.1024L23.4659 18.574C23.608 17.6826 24.4821 17.0687 25.4307 17.203C26.3743 17.3367 27.0245 18.1674 26.883 19.0588Z"
                      fill="white"
                    />
                    <path
                      d="M7.5368 14.1491C7.97955 14.4081 8.47172 14.5315 8.95803 14.5315C9.8631 14.5315 10.748 14.1021 11.2581 13.3218C11.7285 12.6032 11.769 11.7533 11.4589 11.0257L16.5887 3.1955C17.0523 2.48748 16.8205 1.5601 16.0708 1.12146C15.8093 0.968867 15.5192 0.895447 15.2331 0.895447C14.6987 0.895447 14.1769 1.14902 13.8743 1.61053L8.74615 9.44069C7.91875 9.50345 7.13124 9.91584 6.66077 10.6343C5.87481 11.8336 6.26812 13.4072 7.5368 14.1491Z"
                      fill="white"
                    />
                    <path
                      d="M24.5423 11.0257C24.2322 11.7533 24.2718 12.6032 24.7424 13.3218C25.2534 14.1022 26.1374 14.5315 27.0433 14.5315C27.5295 14.5315 28.021 14.4081 28.4645 14.1491C29.7332 13.4072 30.1256 11.8335 29.34 10.6343C28.8707 9.91584 28.0825 9.50345 27.2558 9.44069L22.1257 1.61053C21.8239 1.14895 21.302 0.895447 20.7675 0.895447C20.4816 0.895447 20.1914 0.968867 19.9295 1.12146C19.1801 1.5601 18.9501 2.48748 19.4118 3.1955L24.5423 11.0257Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="my-account__section--title">
                    Purchase History
                  </h4>
                  <span className="my-account__section--text">
                    Check the status of your purchase history and returns
                  </span>
                </div>
              </div>
            </Link>
            <Link className="link-container" to="/my-account/wishlist">
              <div className=" my-account__wishlist my-account__section">
                <div className="icon-container">
                  <svg
                    className=" my-account__icon"
                    viewBox="0 0 34 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.175 22.8315L14 23L13.825 22.8315C5.495 15.5692 0 10.767 0 5.89744C0 2.52747 2.625 0 6.125 0C8.82 0 11.445 1.66813 12.3725 3.97656H15.645C16.555 1.66813 19.18 0 21.875 0C25.375 0 28 2.52747 28 5.89744C28 10.767 22.505 15.5692 14.175 22.8315Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="my-account__section--title">My wishlist</h4>
                  <span className="my-account__section--text">
                    Manage your wishlist
                  </span>
                </div>
              </div>
            </Link>
            <Link className="link-container" to="/my-account/address-book">
              <div className=" my-account__address-book my-account__section">
                <div className="icon-container">
                  <svg
                    className=" my-account__icon"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 115.9 142.88"
                  >
                    <title>checklist</title>
                    <path
                      d="M37.06,5v5a2.52,2.52,0,0,1-2.28,2.5,2.86,2.86,0,0,1-.89.14H24.6V23H71.29V12.68H62a2.81,2.81,0,0,1-.89-.14A2.52,2.52,0,0,1,58.84,10V5ZM18.4,49.25a2.25,2.25,0,1,1,3.74-2.51l1.23,1.82,4.87-5.92a2.25,2.25,0,0,1,3.48,2.86L25,53.7a2,2,0,0,1-.54.5,2.24,2.24,0,0,1-3.12-.61L18.4,49.25Zm0,23.28A2.25,2.25,0,1,1,22.14,70l1.23,1.82,4.87-5.93a2.25,2.25,0,0,1,3.48,2.86L25,77a1.88,1.88,0,0,1-.54.51,2.24,2.24,0,0,1-3.12-.62L18.4,72.53Zm0,24.2a2.25,2.25,0,1,1,3.74-2.51l1.23,1.83,4.87-5.93A2.25,2.25,0,0,1,31.72,93L25,101.18a2,2,0,0,1-.54.5,2.24,2.24,0,0,1-3.12-.61L18.4,96.73Zm5-68.57a3.85,3.85,0,0,1-2.68-1.11c-.09-.09-.14-.18-.23-.27a3.94,3.94,0,0,1-.89-2.41V19.28h-14a.49.49,0,0,0-.4.18.67.67,0,0,0-.18.4v97.4a.42.42,0,0,0,.18.4.56.56,0,0,0,.4.18H90.32a.56.56,0,0,0,.4-.18.44.44,0,0,0,.18-.4V19.86a.67.67,0,0,0-.18-.4.5.5,0,0,0-.4-.18h-14v5.09a3.89,3.89,0,0,1-.9,2.41c-.08.09-.13.18-.22.27a3.85,3.85,0,0,1-2.68,1.11ZM5.62,122.88A5.63,5.63,0,0,1,0,117.26V19.86a5.63,5.63,0,0,1,5.62-5.62h14V11.47A3.79,3.79,0,0,1,23.4,7.68h8.66V4.2a4.14,4.14,0,0,1,1.25-2.95A4.13,4.13,0,0,1,36.25,0h23.4a4.15,4.15,0,0,1,2.94,1.25,4.14,4.14,0,0,1,1.25,3V7.68H72.5a3.79,3.79,0,0,1,3.79,3.79v2.77h14a5.63,5.63,0,0,1,5.63,5.62v97.4a5.63,5.63,0,0,1-5.63,5.62ZM76.37,99.6a2.55,2.55,0,0,0,0-5.09H42.56a2.55,2.55,0,0,0,0,5.09H76.37Zm0-48.8a2.55,2.55,0,0,0,0-5.09H42.56a2.55,2.55,0,0,0,0,5.09Zm0,24.07a2.55,2.55,0,0,0,0-5.09H42.56a2.55,2.55,0,0,0,0,5.09Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="my-account__section--title">Address book</h4>
                  <span className="my-account__section--text">
                    Save and manage your addresses
                  </span>
                </div>
              </div>
            </Link>
            <Logout />
          </div>
        </div>
      )}
    </div>
  );
};
export default Cabinet;

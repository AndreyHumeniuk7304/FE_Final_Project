import { Link } from "react-router-dom";
import Links from "../Links/Links";
const Profile = () => {
  return (
    <div className="profile">
      <Links />
      <div className="profile__container">
        <form className="profile__form">
          <div>
            <label className="bold profile__label">EMAIL ADRESS</label>
            <input
              placeholder="Email adress"
              className="profile__input"
              type="email"
            ></input>
          </div>
          <div>
            <label className="bold profile__label">FIRST NAME</label>
            <input
              placeholder="First name"
              className="profile__input"
              type="text"
            ></input>
          </div>
          <div>
            <label className="bold profile__label">SECOND NAME</label>
            <input
              placeholder="Second name"
              className="profile__input"
              type="text"
            ></input>
          </div>
          <div>
            <label className="bold profile__label">MOBILE PHONE</label>
            <input
              placeholder="Mobile phone"
              className="profile__input"
              type="tel"
            ></input>
          </div>
          <div>
            <div className="profile__checkbox-container">
              <div>
                <input
                  className="profile__checkbox-input"
                  type="checkbox"
                  name="Male"
                ></input>
                <label className="profile__checkbox-label">Male</label>
              </div>
              <div>
                <input
                  className="profile__checkbox-input"
                  type="checkbox"
                  name="Female"
                ></input>
                <label className="profile__checkbox-label">Female</label>
              </div>
            </div>
          </div>
          <div className="profile__birthday">
            <label className="bold profile__label">BIRTHDAY</label>
            <input
              className="profile__input"
              type="date"
              id="birthday"
              name="birthday"
            ></input>
          </div>
          <input className="profile__button" type="button" value="SAVE"></input>
        </form>
      </div>
    </div>
  );
};
export default Profile;

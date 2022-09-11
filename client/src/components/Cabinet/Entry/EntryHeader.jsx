import PropTypes from "prop-types";

/* code review: NOT good
    є бібліотека classNames, яка дозволяє використовувати умовні класи
    https://www.npmjs.com/package/classnames
 */

const EntryHeader = ({ isRegist, setIsRegist }) => {
  return (
    <div className="entry__header">
      <h6
        className={`header__item ${!isRegist && "header__item--underline"}`}
        id="login"
        onClick={() => setIsRegist(false)}
      >
        Login
      </h6>
      <h6
        className={`header__item ${isRegist && "header__item--underline"}`}
        id="regist"
        onClick={() => setIsRegist(true)}
      >
        Registration
      </h6>
    </div>
  );
};

export default EntryHeader;

EntryHeader.propTypes = {
  isRegist: PropTypes.bool,
  setIsRegist: PropTypes.func,
};

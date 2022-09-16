import PropTypes from "prop-types";
import classNames from "classnames";

const EntryHeader = ({ activeTitle, setActiveTitle, title }) => {
  const titleClass = classNames("header__item", {
    "header__item--underline": activeTitle === title.toLowerCase(),
  });

  const getTitleName = (e) => setActiveTitle(e.target.id);

  return (
    <h6 className={titleClass} id={title.toLowerCase()} onClick={getTitleName}>
      {title}
    </h6>
  );
};

export default EntryHeader;

EntryHeader.propTypes = {
  activeTitle: PropTypes.string,
  title: PropTypes.string,
  setActiveTitle: PropTypes.func,
};

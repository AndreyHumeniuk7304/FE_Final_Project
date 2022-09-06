import React, { useState } from "react";
import PropTypes from "prop-types";

export default function CustomPaymantInput({ formType, formName, register }) {
  // const [backspaceFlag, setBackspaceFlag] = useState(false);
  // const [expiratoinDate, setExpirationDate] = useState("");

  // const handleExpirationDate = (event) => {
  //   let textTemp = event.target.value;
  //   if (textTemp[0] !== "1" && textTemp[0] !== "0") {
  //     textTemp = "";
  //   }
  //   if (textTemp.length === 2) {
  //     if (
  //       parseInt(textTemp.substring(0, 2)) > 12 ||
  //       parseInt(textTemp.substring(0, 2)) == 0
  //     ) {
  //       textTemp = textTemp[0];
  //     } else if (textTemp.length === 2 && !backspaceFlag) {
  //       textTemp += "/";
  //       setBackspaceFlag(true);
  //     } else if (textTemp.length === 2 && backspaceFlag) {
  //       textTemp = textTemp[0];
  //       setBackspaceFlag(false);
  //     } else {
  //       textTemp = textTemp[0];
  //     }
  //   }
  //   setExpirationDate(textTemp);
  // };

  return (
    <div>
      <input
        className="form__expiry-date"
        maxLength={7}
        // value={expiratoinDate}
        // onChange={handleExpirationDate}
        {...register(formName)}
        // autoComplete={"off"}
        // type={formType && formType}
      />
    </div>
  );
}

CustomPaymantInput.propTypes = {
  formName: PropTypes.string,
  register: PropTypes.func,
  formType: PropTypes.string,
};

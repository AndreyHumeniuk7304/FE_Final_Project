import { useState } from "react";
import EntryHeader from "../../components/Entry/EntryHeader";
import Login from "../../components/Entry/Login";
import Registration from "../../components/Entry/Registrations";

const Entry = () => {
  const [isRegist, setIsRegist] = useState(false);

  return (
    <div className="entry">
      <div className="entry__box">
        <EntryHeader isRegist={isRegist} setIsRegist={setIsRegist} />
        <div className="entry__content">
          {!isRegist && <Login />}
          {isRegist && <Registration setIsRegist={setIsRegist} />}
        </div>
      </div>
    </div>
  );
};

export default Entry;

import { useState } from "react";
import EntryHeader from "../../components/Cabinet/Entry/EntryHeader";
import Login from "../../components/Cabinet/Entry/Login";
import Registration from "../../components/Cabinet/Entry/Registrations";

/* code review: good, but could be better
    краще не скорочувати назви змінних, адже це збільшує час на розуміння коду
 */

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

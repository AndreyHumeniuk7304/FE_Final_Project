import { useState } from "react";
import EntryHeader from "../../components/Cabinet/Entry/EntryHeader";
import Login from "../../components/Cabinet/Entry/Login";
import Registration from "../../components/Cabinet/Entry/Registrations";

const Entry = () => {
  const [activeTitle, setActiveTitle] = useState("login");

  return (
    <div className="entry">
      <div className="entry__box">
        <div className="entry__header">
          <EntryHeader
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
            title={"Login"}
          />
          <EntryHeader
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
            title={"Registration"}
          />
        </div>
        <div className="entry__content">
          {activeTitle === "login" && <Login />}
          {activeTitle === "registration" && (
            <Registration setActiveTitle={setActiveTitle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Entry;

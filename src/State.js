import React, { useState } from "react";
import Online from "./Online";
import Offline from "./Offline";

const State = () => {
  const [online, setOnline] = useState(true);
  const [userType, setUserType] = useState("Admin");
  const myLanguages = ["JavaScript", "HTML", "CSS", "Python", "Python"];
  const languages = myLanguages.map((language, index) => <li key={index}>{language}</li>);
  let userStatus = <Offline />;

  if (online) {
    userStatus = <Online />;
  }

  return (
    <>
      <h1>Every Time</h1>
      { userStatus }
      { window.outerWidth < 800 && <h1>This window is not opened by pc</h1> }
      <h3>
        { userType === 'Admin' ? "Admin": "Writter" }
      </h3>

      <ul>
        {languages}
      </ul>
    </>
  )
}

export default State;
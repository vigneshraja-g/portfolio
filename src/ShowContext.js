import React, { createContext, useState } from "react";

export const ShowContext = createContext();

export const ShowProvider = props => {
  const [show, setShow] = useState("");
  return (
    <ShowContext.Provider value={[show, setShow]}>
      {props.children}
    </ShowContext.Provider>
  );
};

import React from "react";
import { MixtapeContext } from "./mixtapeContext";

export default function MixtapeProvider({ children, songs }) {
  return (
    <MixtapeContext.Provider value={songs} genre="" sortOrder="">
      {children}
    </MixtapeContext.Provider>
  );
}

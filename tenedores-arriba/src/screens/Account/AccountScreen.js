//export default only export 1 function export function can export multiple functions.
import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoggedScreen } from "./LoggedScreen";
import { GuestScreen } from "./GuestScreen";

// verifies user staus , loged or not loged.
// ?=if :else
export function AccountScreen() {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLogged(user ? true : false);
    });
  }, []);
  //03APR removed <view> and <text> instead ussing: if isLogged is true <LoggedScreen/> else <GuestScreen/>
  return isLogged ? <LoggedScreen /> : <GuestScreen />;
}

//export default only export 1 function export function can export multiple functions.
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {

  }, []);
  return (
    <View>
      <Text>Estamos en la screen account</Text>
    </View>
  );
}
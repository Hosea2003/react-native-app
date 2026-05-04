import { Stack } from "expo-router";
import React, { useEffect } from "react";

const ProtectedLayout = () => {
  useEffect(() => {}, []);
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
